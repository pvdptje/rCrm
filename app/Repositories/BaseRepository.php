<?php
/**
 * Class BaseRepository
 * @package App\Repositories
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\Repositories;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

/**
 * Class BaseRepository
 * @package App\Repositories
 */
class BaseRepository
{

    /**
     * @var Application
     */
    protected $app;

    /**
     * @var Request
     */
    protected $request;

    /**
     * BaseRepository constructor.
     * @param Application $app
     * @param Request $request
     */
    public function __construct(Application $app, Request $request)
    {
        $this->app = $app;
    }

    /**
     * @param Model $model
     * @param $selector
     * @return \Illuminate\Database\Eloquent\Model|null|object|static
     */
    public function getUpload(Model $model, $selector)
    {
        return $model->uploads()->where('selector', $selector)->orderby('id', 'desc')->first();
    }

    /**
     * @param $class
     * @param array ...$args
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function make($class, ...$args)
    {
        return $this->app->make($class,$args);
    }
}