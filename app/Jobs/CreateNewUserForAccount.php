<?php

namespace App\Jobs;

use App\Account;
use App\Events\NewUserAddedToAccount;
use App\Repositories\UserRepository;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

/**
 * Class CreateNewUserForAccount
 * @package App\Jobs
 */
class CreateNewUserForAccount implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    /**
     * @var Account
     */
    protected $account;

    /**
     * @var array
     */
    protected $variables;

    /**
     * CreateNewUserForAccount constructor.
     * @param Account $account
     * @param array $variables
     */
    public function __construct(Account $account, array $variables)
    {
        $this->account = $account;
        $this->variables = $variables;
    }

    /**
     * @param UserRepository $userRepository
     */
    public function handle(UserRepository $userRepository)
    {
        $user = $userRepository->create($this->variables);

        $this->account->users()->attach($user);

        event (new NewUserAddedToAccount($user, $this->variables));
    }
}
