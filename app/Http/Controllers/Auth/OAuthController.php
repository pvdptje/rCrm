<?php
/**
 * Class OAuthController
 * @package App\Http\Controllers\Auth
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use App\Repositories\OAuthRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

/**
 * Class OAuthController
 * @package App\Http\Controllers\Auth
 */
class OAuthController extends Controller
{
    /**
     * @param Request $request
     * @param OAuthRepository $repository
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \App\Exceptions\MustAuthenticateWithOAuth
     */
    public function redirectToGoogle(Request $request, OAuthRepository $repository)
    {
        if(Session::has('googleAuthUrl')){ // This page shouldnt be called on its own.
            return redirect(Session::get('googleAuthUrl'));
        }
        // No auth url?, this should trigger a redirect
        $repository->getGoogleClient($request->user());

        return redirect('/account');
    }

    /**
     * @param Request $request
     * @param OAuthRepository $repository
     * @return $this|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \App\Exceptions\MustAuthenticateWithOAuth
     */
    public function handleGoogleCallback(Request $request, OAuthRepository $repository)
    {
        if(!$code = $request->get('code'))
            return redirect('/account');

        $client = $repository->getGoogleClient($request->user(), $code);

        if(Session::has('followUpUrl')){
            $url = Session::get('followUpUrl');
            Session::forget('followUpUrl');
            return redirect($url);
        }

        return redirect('/account');
    }


}