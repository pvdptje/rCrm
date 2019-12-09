<?php

namespace App\Listeners;

/**
 * Class ValidateLogoUpload
 * @package App\Listeners
 */
class ValidateLogoUpload extends ValidateImageUpload
{
    protected $selector = 'logo';
}
