<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SaveSetting extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return array_key_exists($this->get('key'), config('allowed_settings'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'value' => config('allowed_settings')[$this->get('key')]['rules'] ?? []
        ];
    }

    public function attributes()
    {
        return [
            'key' => config('allowed_settings') [$this->get('key')]['attribute'] ?? []
        ];
    }
}
