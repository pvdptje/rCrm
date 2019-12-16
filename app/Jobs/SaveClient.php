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
     * @var
     */
    protected $variables;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(User $user, $variables)
    {
        $this->user = $user;
        $this->variables = $variables;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->user->clients()->create(array_merge([
            'account_id' => $this->user->account->id
        ],$this->variables));
    }
}
