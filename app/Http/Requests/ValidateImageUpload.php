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
            $selector => [function ($attribute, $value, $fail) {
                    try {

                        $image = explode(',', $value);
                        $image = base64_decode($image[1]);
                        $f = finfo_open();
                        $result = finfo_buffer($f, $image, FILEINFO_MIME_TYPE);

                        if($result !== 'image/png'){
                            $fail($attribute. __(' must be an image.'));
                        }

                    } catch (\Exception $e){
                        $fail($attribute. __(' must be an image.'));
                    }
            }]
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
