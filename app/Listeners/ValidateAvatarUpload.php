<?php

namespace App\Listeners;

use App\Events\BeforeFileUpload;
use App\Http\Requests\ValidateAvatarUpload as ValidateRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;

/**
 * Class ValidateAvatarUpload
 * @package App\Listeners
 */
class ValidateAvatarUpload
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
        if($event->selector === 'avatar'){
            $this->validate(
                $event->request,
                $this->validateRequest->rules(),
                $this->validateRequest->messages(),
                $this->validateRequest->attributes()
            );
        }
    }
}
