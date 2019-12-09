<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class DestroyUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $currentUser = Auth::user();
        $userToDelete = $this->route('user');

        if($currentUser->id == $userToDelete->id){ #cannot delete yourself :)
            return false;
        }

        $currentUserAccount = $currentUser->accounts->first();
        $userToDeleteAccount = $userToDelete->accounts->first();

        if($currentUserAccount->id !== $userToDeleteAccount->id){ # can't delete some id not beloning to same account;
            return false;
        }

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
