<?php
/**
 * Class UserRepository
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\Repositories;
use App\User;

/**
 * Class UserRepository
 * @package App\Repositories
 */
class UserRepository extends BaseRepository
{
    /**
     * @param array $variables
     * @return User
     */
    public function create(array $variables) : User
    {
        return User::create([
            'name' => $variables['name'],
            'email' => $variables['email'],
            'password' => bcrypt($variables['password'])
        ]);
    }

}