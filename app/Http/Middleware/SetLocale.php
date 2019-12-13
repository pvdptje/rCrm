<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Contracts\Foundation\Application;

/**
 * Class SetLocale
 * @package App\Http\Middleware
 */
class SetLocale
{
    protected $app;

    /**
     * SetLocale constructor.
     * @param Application $application
     */
    public function __construct(Application $application)
    {
        $this->app = $application;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        Carbon::setLocale($this->app->getLocale());

        return $next($request);
    }
}
