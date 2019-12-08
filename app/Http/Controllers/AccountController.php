<?php

namespace App\Http\Controllers;

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

    /**
     * AccountController constructor.
     * @param Guard $auth
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
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

        return view('account.index', compact('user', 'account', 'users'));
    }
}
