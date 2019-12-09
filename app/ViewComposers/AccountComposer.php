<?php
/**
 * Class CompanyNameComposer
 * @package App\ViewComposers
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\ViewComposers;


use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\View\View;

/**
 * Class AccountComposer
 * @package App\ViewComposers
 */
class AccountComposer
{
    /**
     * @var Guard
     */
    protected $auth;

    /**
     * We store the used variables in a static array, if we already have it we simply return it.
     * This ensures us no queries are executed multiple times.
     * @var array
     */
    static $composed = [];

    /**
     * AccountComposer constructor.
     * @param Guard $auth
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }

    /**
     * @param View $view
     * @return void
     */
    public function compose(View $view) : void
    {
        if(!isset(static::$composed['account'])){
            static::$composed['account'] = $this->auth->check() ? $this->auth->user()->accounts()->first() : [];
        }

        $view->with('account', static::$composed['account']);
    }
}