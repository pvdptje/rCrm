<?php
/**
 * @author: Patrick vd Pols
 * @date: 2019-12-18
 * @time: 9:20
 */

namespace App\rCrm\Navbar;

use App\User;

/**
 * Class Navbar
 * @package App\rCrm\Navbar
 */
class Navbar
{
    /**
     * @var User
     */
    protected $user;

    /**
     * Navbar constructor.
     * @param User|null $user
     */
    public function __construct( User $user )
    {
       $this->user = $user;
    }

    /**
     * @return array
     */
    public function build()
    {
        return $this->parseConfig(config('navbar'));
    }


    /**
     * @param $config
     * @return array
     */
    protected function parseConfig( $config)
    {
        $returnValue = [];
        foreach($config as $navItem){
            if($value = $this->parseNavItem($navItem)){
                $returnValue[] = $value;
            }
        }

        return $returnValue;
    }

    /**
     * @param $navItem
     * @return array
     */
    protected function makeNavItem( $navItem){

        return [
            'header' => $navItem['header'] ?? false,
            'href' => route($navItem['route']),
            'name' => __($navItem['name']),
            'icon' => $navItem['icon'] ?? false,
            'route' => $navItem['route'],
            'submenu' => isset($navItem['submenu']) && is_array($navItem['submenu']) ? $this->parseConfig($navItem['submenu']) : false
         ];
    }

    /**
     * @param $navItem
     * @param $retval
     * @return array | boolean
     */
    protected function parseNavItem( $navItem )
    {
       if(!$this->user->can('viewRoute', [User::class, $navItem['route']])){
            return false;
       }

       return $this->makeNavItem($navItem);
    }


}