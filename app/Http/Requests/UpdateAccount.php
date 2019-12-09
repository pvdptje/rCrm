<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateAccount
 * @package App\Http\Requests
 */
class UpdateAccount extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() : array
    {
        return [
            'company_name' => ['required', 'string', 'max:255'],
            'invoice_email' => ['required', 'email', 'string', 'max:255'],
            'street' => ['required', 'string', 'max:255'],
            'house_number' => ['required', 'max:255'],
            'postcode' =>  ['required', 'string', 'max:10'],
            'province' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255']
        ];
    }

    /**
     * @return array
     */
    public function attributes() : array
    {
        return [
            'company_name' => __('company name'),
            'password' => __('password'),
            'invoice_email' => __('invoice email'),
            'street' => __('street'),
            'house_number' => __('number'),
            'postcode' =>  __('postcode'),
            'province' => __('province'),
            'city' => __('city'),
            'country' => __('country'),
        ];
    }
}
