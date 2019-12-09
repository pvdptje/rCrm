<?php

namespace App\Providers;

use App\Events\BeforeFileUpload;
use App\Listeners\CreateAccountAfterRegister;
use App\Listeners\ValidateAvatarUpload;
use App\Listeners\ValidateLogoUpload;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

/**
 * Class EventServiceProvider
 * @package App\Providers
 */
class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            CreateAccountAfterRegister::class,
            SendEmailVerificationNotification::class,
        ],
        BeforeFileUpload::class => [
            ValidateAvatarUpload::class,
            ValidateLogoUpload::class,
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
    }
}
