<?php

namespace App\Http\Requests;

/**
 * Class ValidateAvatarUpload
 * @package App\Http\Requests
 *
 *
 * This validation class gets called in
 * the event listener for avatar upload validaton
 * @see \App\Listeners\ValidateAvatarUpload
 */
class ValidateAvatarUpload
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'avatar' => 'mimes:jpeg,bmp,png|max:2048'
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [];
    }

    /**
     * @return array
     */
    public function attributes()
    {
        return [];
    }
}
