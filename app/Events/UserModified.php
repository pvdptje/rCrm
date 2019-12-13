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
     * UserModified constructor.
     * @param User $victim
     * @param User $user
     * @param $action
     */
    public function __construct(User $victim, User $user, $action)
    {
        $this->victim = $victim;
        $this->user = $user;
        $this->action = $action;
    }
}
