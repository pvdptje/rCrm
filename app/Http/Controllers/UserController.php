<?php

namespace App\Http\Controllers;

use App\Http\Requests\DestroyUser;
use App\Http\Requests\UpdateUser;
use App\User;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;

/**
 * Class UserController
 * @package App\Http\Controllers
 */
class UserController extends Controller
{
    /**
     * @var Guard
     */
    protected $auth;

    /**
     * UserController constructor.
     * @param Guard $auth
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit()
    {
        return view('user.edit');
    }

    public function update(UpdateUser $request, User $user = null)
    {
        $user = $user ?? $this->auth->user();

        dd($user);
    }

    /**
     * @param DestroyUser $request
     * @param User $user
     * @return $this
     * @throws \Exception
     */
    public function destroy(DestroyUser $request, User $user)
    {
        $user->delete();

        return redirect()->back()->with('message', __('User deleted'));
    }

}
