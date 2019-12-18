<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

/**
 * Class AccessPolicy
 * @package App\Policies
 */
class AccessPolicy
{
    /**
     * @param User $user
     * @param $routeName
     * @return bool
     */
    public function viewRoute( User $user, $routeName)
    {
        return false;
    }

}
