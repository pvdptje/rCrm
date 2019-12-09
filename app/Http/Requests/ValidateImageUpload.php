<?php

namespace App\Http\Requests;

class ValidateImageUpload
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules($selector)
    {
        return [
            $selector => 'mimes:jpeg,bmp,png|max:2048'
        ];
    }

    /**
     * @return array
     */
    public function messages($selector)
    {
        return [];
    }

    /**
     * @return array
     */
    public function attributes($selector)
    {
        return [];
    }
}
