<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateNewUserForAccount;
use App\Http\Requests\UpdateAccount;
use App\Repositories\BaseRepository;
use App\Repositories\OAuthRepository;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\RedirectResponse;

use App\Jobs\CreateNewUserForAccount as CreateNewUserForAccountJob;
use App\Jobs\UpdateAccount as UpdateAccountJob;
/**
 * Class AccountController
 * @package App\Http\Controllers
 */
class AccountController extends Controller
{
    /**
     * @var Guard
     */
    protected $auth;

    /**
     * @var BaseRepository
     */
    protected $baseRepository;

    /**
     * AccountController constructor.
     * @param Guard $auth
     * @param BaseRepository $baseRepository
     */
    public function __construct(Guard $auth, BaseRepository $baseRepository)
    {
        $this->auth = $auth;
        $this->baseRepository = $baseRepository;
    }

    /**
     * @param OAuthRepository $repository
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \App\Exceptions\MustAuthenticateWithOAuth
     */
    public function index(OAuthRepository $repository)
    {
        $user    = $this->auth->user();
        $account = $user->accounts()->first();
        $users   = $account->users;

        $oAuth   = $user->oAuth()->where('service', 'google')->first();

        $calendarId = false;
        $calendarList = [];
        // it seems this user has an account, check if were connected;
        if($oAuth){
            // We should be able to connect, since we have details.
            $client = $repository->getGoogleClient($user);
            $calendarService = new \Google_Service_Calendar($client);
            $calendarId = $user->setting('google_calendar_id');
            $calendarList = $calendarService->calendarList->listCalendarList();
        }

        $avatar = $this->baseRepository->getUpload($user, 'avatar');
        $logo   = $this->baseRepository->getUpload($account, 'logo');

        return view('account.index', compact(
            'user', 'account', 'users', 'avatar', 'logo', 'oAuth',
            'calendarId', 'calendarList'
        ));
    }

    /**
     * @param UpdateAccount $request
     * @return RedirectResponse
     */
    public function update(UpdateAccount $request)
    {
        $this->dispatch(
            new UpdateAccountJob(
                $this->auth->user()->accounts()->first(),
                $request->only(['company_name', 'invoice_email', 'street', 'house_number', 'postcode', 'province', 'city', 'country']
                )
        ));

        return redirect()->back()->with('message', __('Account details updated'));
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showAddUser()
    {
        return view('account.add_user');
    }

    /**
     * @param CreateNewUserForAccount $request
     * @return RedirectResponse
     */
    public function storeAddUser(CreateNewUserForAccount $request)
    {
        $this->dispatch( new CreateNewUserForAccountJob(
            $this->auth->user()->accounts()->first(),
            $request->only('name', 'email', 'password')
        ));

        return redirect()->route('account.index')->with('message', __('User added to account'));
    }


}
