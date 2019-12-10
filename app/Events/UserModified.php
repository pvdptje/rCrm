<?php

namespace App\Events;

use App\User;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

/**
 * Class UserDeleted
 * @package App\Events
 */
class UserModified
{
    use Dispatchable, SerializesModels;

    /**
     * @var User
     * The user that gets modified
     */
    public $victim;

    /**
     * @var User
     * The user that does the modification
     */
    public $user;

    /**
     * @var string
     * The kind of modification that happens
     * (update, delete etc)
     */
    public $action;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $victim, User $user, $action)
    {
        $this->victim = $victim;
        $this->user = $user;
    }
}
