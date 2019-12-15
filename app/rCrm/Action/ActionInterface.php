<?php
/**
 * interface ActionInterface
 * @package App\rCrm
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\rCrm\Action;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;


/**
 * Interface ActionInterface
 * @package App\rCrm
 */
interface ActionInterface
{
    /**
     * @param Model $model
     * @param Request $request
     * @return mixed
     */
    public function handle(Model $model, Request $request);

    /**
     * @param Collection $models
     * @param Request $request
     * @return mixed
     */
    public function before(Collection $models, Request $request);
}