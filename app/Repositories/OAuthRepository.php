<?php
/**
 * Class OAuthRepository
 * @package App\Repositories
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\Repositories;

use App\Exceptions\MustAuthenticateWithOAuth;
use App\OAuth;
use App\User;

/**
 * Class OAuthRepository
 * @package App\Repositories
 */
class OAuthRepository extends BaseRepository
{
    /**
     * @return \Google_Client
     * @throws MustAuthenticateWithOAuth
     */
    public function getGoogleClient(User $user, $authCode = null, $followUpUrlAfterSignup = '' )
   {
       $client = new \Google_Client();
       $client->setApplicationName('rCrm');
       $client->setScopes(\Google_Service_Calendar::CALENDAR);
       $client->setClientId(env('GOOGLE_CLIENT_ID'));
       $client->setClientSecret(env('GOOGLE_CLIENT_SECRET'));
       $client->setRedirectUri(url()->to(env('GOOGLE_REDIRECT')));
       $client->setAccessType('offline');
       $client->setPrompt('select_account consent');

       $oauth = $user->oauth()->where('service', 'google')->first() ?? new OAuth();

       if($authCode){
           // Exchange authorization code for an access token.
           $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
           $this->saveOAuthCredentials($user, $oauth, $accessToken, $client);
           return $client;
       }

       if($oauth->token){
           try {
               $client->setAccessToken(json_decode($oauth->token, true));
           } catch (\InvalidArgumentException $e){
               if($e->getMessage() === 'Invalid token format'){
                   // Delete this credentials if wrong and try again.
                   $oauth->delete();
                   throw new MustAuthenticateWithOAuth('No access/refresh token', 0, null, $client->createAuthUrl());
               }
           }
       }

       if(!$client->isAccessTokenExpired())
            return $client;

       if($client->getRefreshToken()){
           $accessToken = $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
           $this->saveOAuthCredentials($user, $oauth, $accessToken, $client);

           return $client;
       }

       try {
           if($oauth->refresh_token){
               $accessToken = $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
               $this->saveOAuthCredentials($user, $oauth, $accessToken, $client);

               return $client;
           }
       } catch (\Exception $e)
       {

       }

       throw new MustAuthenticateWithOAuth('No access/refresh token', 0, null, $client->createAuthUrl());
   }

    /**
     * @param User $user
     * @param $oauth
     * @param $accessToken
     * @param $client
     */
    private function saveOAuthCredentials(User $user, $oauth, $accessToken, $client): void
    {
        $oauth->service = 'google';
        $oauth->user_id = $user->id;
        $oauth->token = json_encode($accessToken);
        $oauth->refresh_token = $client->getRefreshToken();
        $oauth->save();
    }
}