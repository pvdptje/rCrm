<?php

namespace App\Listeners;

/**
 * Class ValidateAvatarUpload
 * @package App\Listeners
 */
class ValidateAvatarUpload extends ValidateImageUpload
{
    protected $selector = 'avatar';
}
