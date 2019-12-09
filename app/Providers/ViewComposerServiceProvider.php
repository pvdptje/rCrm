<?php

namespace App\Providers;

use App\ViewComposers\AccountComposer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewComposerServiceProvider extends ServiceProvider
{
    protected $composers = [
       '*' => [
           AccountComposer::class
       ]
    ];

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        foreach($this->composers as $view => $composers){
            foreach($composers as $composer){
                View::composer($view, $composer);
            }
        }
    }
}
