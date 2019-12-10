<?php

namespace App\Http\Requests;

use App\User;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $routeUser = $this->route('user');

        if($routeUser){
            if($routeUser->user->accounts()->first()->id !== $this->user()->accounts()->first()->id){
                return false;
            }
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
        $rules['name'] = ['required', 'string', 'max:255'];
        $rules['email'] = ['email', 'max:255'];

        if($this->get('password')){
            $rules['password'] = ['required', 'min:8', 'max:255'];
        }
        // Check for uniqueness of emailaddress when it's updating.
        $userWeAreEditing = $this->route('user') ?? $this->user();
        if($userWeAreEditing->email !== $this->get('email')){
            $rules['email'] = 'unique:users';
        }

        return $rules;
    }
}
