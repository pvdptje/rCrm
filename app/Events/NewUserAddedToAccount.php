<?php

namespace App\Events;

use App\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

/**
 * Class NewUserAddedToAccount
 * @package App\Events
 */
class NewUserAddedToAccount
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var User
     */
    public $user;

    /**
     * @var array
     */
    public $variables;

    /**
     * NewUserAddedToAccount constructor.
     * @param User $user
     */
    public function __construct(User $user, array $variables)
    {
        $this->user = $user;
        $this->variables = $variables;
    }
}
