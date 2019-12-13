<?php

namespace App\Events;

use App\Client;
use App\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

/**
 * Class ClientModified
 * @package App\Events
 */
class ClientModified
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var User
     */
    public $user;

    /**
     * @var Client
     */
    public $client;

    /**
     * @var string
     */
    public $action;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user, Client $client, string $action)
    {
        $this->user = $user;
        $this->client = $client;
        $this->action = $action;
    }
}
