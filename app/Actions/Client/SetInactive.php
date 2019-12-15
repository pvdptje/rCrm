<?php
/**
 * Class SetInactive
 * @package App\Actions\Client
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\Actions\Client;

use App\rCrm\Action\Action;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use App\rCrm\Action\ActionInterface;
use Illuminate\Database\Eloquent\Model;
use App\rCrm\Action\Exceptions\IllegalActionException;

/**
 * Class SetInactive
 * @package App\Actions\Client
 */
class SetInactive extends Action implements ActionInterface
{
    /**
     * @param Collection $models
     * @param Request $request
     * @return bool|mixed
     */
    public function before(Collection $models, Request $request)
    {
        $models->each(function($model) use ($request){
            if($model->user_id !== $request->user()->id){
                throw new IllegalActionException('Client does not belong to this user');
            }
        });

        return true;
    }

    /**
     * Perform an action on a single model
     * @param Model $model
     * @param Request $request
     * @return mixed|void
     */
    public function handle(Model $model, Request $request)
    {
        //
    }

    /**
     * @return $this
     */
    public function success()
    {
        return redirect()->back()->with('message', __('Clients set to inactive'));
    }
}