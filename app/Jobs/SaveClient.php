<?php

namespace App\Jobs;

use App\Client;
use App\User;
use Illuminate\Foundation\Bus\Dispatchable;

/**
 * Class SaveClient
 * @package App\Jobs
 */
class SaveClient
{
    use Dispatchable;

    /**
     * @var User
     */
    protected $user;

    /**
     * @var Client
     */
    protected $client;

    /**
     * @var
     */
    protected $variables;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(User $user, Client $client, $variables)
    {
        $this->user = $user;
        $this->client = $client;
        $this->variables = $variables;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->client->create(array_merge([
            'user_id' => $this->user->id,
            'account_id' => $this->user->account->id
        ],$this->variables));
    }
}
