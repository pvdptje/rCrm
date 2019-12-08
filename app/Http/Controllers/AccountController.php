<?php

namespace App\Http\Controllers;

use App\Repositories\BaseRepository;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;

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

    protected $baseRepository;

    /**
     * AccountController constructor.
     * @param Guard $auth
     */
    public function __construct(Guard $auth, BaseRepository $baseRepository)
    {
        $this->auth = $auth;
        $this->baseRepository = $baseRepository;
    }

    /**
     * Display the account index.
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $user    = $this->auth->user();
        $account = $user->accounts()->first();
        $users   = $account->users();

        $avatar = $this->baseRepository->getUpload($user, 'avatar');

        return view('account.index', compact('user', 'account', 'users', 'avatar'));
    }
}
