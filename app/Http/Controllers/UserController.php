<?php

namespace App\Http\Controllers;

use App\Events\UserDeleted;
use App\Events\UserModified;
use App\Http\Requests\DestroyUser;
use App\Http\Requests\UpdateUser;
use App\Jobs\SaveUser;
use App\User;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

/**
 * Class UserController
 * @package App\Http\Controllers
 */
class UserController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit()
    {
        return view('user.edit');
    }

    /**
     * @param UpdateUser $request
     * @param User|null $user
     * @return RedirectResponse
     */
    public function update(UpdateUser $request, User $user = null)
    {
        $user = $user ?? $request->user();

        $data = $request->only('name', 'email');

        if($password = $request->get('password')){
            $data['password'] = bcrypt($password);
        }

        $this->dispatch( new SaveUser($user, $data));

        event( new UserModified($user, $request->user(), 'update'));

        return redirect()->back()->with('message', __('User details updated'));
    }

    /**
     * @param DestroyUser $request
     * @param User $user
     * @return RedirectResponse
     * @throws \Exception
     */
    public function destroy(DestroyUser $request, User $user)
    {
        $deletedUser = clone $user;

        $user->delete();

        event( new UserModified($deletedUser, $request->user(), 'delete'));

        return redirect()->back()->with('message', __('User deleted'));
    }

}
