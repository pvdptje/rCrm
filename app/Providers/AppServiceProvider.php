<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        #db fix
        Schema::defaultStringLength(191);

        #STDIN fix, needed on some local machines.
/*        if(!defined('STDIN')){
            define('STDIN',fopen("php://stdin","r"));
        }*/

        #helpers
        require_once app_path('helpers.php');
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

    }
}
