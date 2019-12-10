<?php

namespace App\Jobs;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

/**
 * Class SaveUser
 * @package App\Jobs
 */
class SaveUser implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var User
     */
    protected $user;

    /**
     * @var
     */
    protected $variables;

    /**
     * SaveUser constructor.
     * @param User $user
     * @param $variables
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
        $this->user->update($this->variables);
    }
}
