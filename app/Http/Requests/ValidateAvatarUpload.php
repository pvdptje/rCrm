<?php

namespace App\Http\Requests;

/**
 * Class ValidateAvatarUpload
 * @package App\Http\Requests
 *
 *
 * This validation class gets called in
 * the event listener for avatar upload validation
 * @see \App\Listeners\ValidateAvatarUpload
 */
class ValidateAvatarUpload extends ValidateImageUpload
{

}
