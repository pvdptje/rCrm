<?php
/**
 * Class ValidateImageUpload
 * @package App\Listeners
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\Listeners;


use App\Events\BeforeFileUpload;

use App\Http\Requests\ValidateImageUpload as ValidateRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;


abstract class ValidateImageUpload
{
    use ValidatesRequests;

    /**
     * @var ValidateRequest
     */
    protected $validateRequest;

    /**
     * ValidateAvatarUpload constructor.
     * @param ValidateRequest $validateRequest
     */
    public function __construct(ValidateRequest $validateRequest)
    {
        $this->validateRequest = $validateRequest;
    }

    /**
     * @param BeforeFileUpload $event
     * @throws \Illuminate\Validation\ValidationException
     */
    public function handle(BeforeFileUpload $event)
    {
        if($event->selector === $this->selector){
            $this->validate(
                $event->request,
                $this->validateRequest->rules($this->selector),
                $this->validateRequest->messages($this->selector),
                $this->validateRequest->attributes($this->selector)
            );
        }
    }
}