<?php
/**
 * Class CompanyNameComposer
 * @package App\ViewComposers
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\ViewComposers;


use App\Repositories\BaseRepository;
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
     * @param BaseRepository $baseRepository
     */
    public function __construct(Guard $auth, BaseRepository $baseRepository)
    {
        $this->auth = $auth;
        $this->baseRepository = $baseRepository;
    }

    /**
     * @param View $view
     * @return void
     */
    public function compose(View $view) : void
    {
        /**
         * User's account
         */
        if(!isset(static::$composed['account'])){
            static::$composed['account'] = $this->auth->check() ? $this->auth->user()->accounts()->first() : [];
        }

        $view->with('account', static::$composed['account']);

        /**
         * Company logo
         */
        if(!isset(static::$composed['companyLogo'])){
            $logo = null;
            if($this->auth->check()){
                $logo = $this->baseRepository->getUpload(static::$composed['account'], 'logo');
                $logo = $logo ? $logo->path : null;
            }

            static::$composed['companyLogo'] = $logo;
        }

        $view->with('companyLogo', static::$composed['companyLogo']);
    }
}