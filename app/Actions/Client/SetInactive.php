<?php
/**
 * Class SetInactive
 * @package App\Actions\Client
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\Actions\Client;

use App\rCrm\Action\Action;
use App\rCrm\Action\ActionInterface;
use App\rCrm\Action\Exceptions\IllegalActionException;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use \Exception;

/**
 * Class SetInactive
 * @package App\Actions\Client
 */
class SetInactive extends Action implements ActionInterface
{
    /**
     * @param Model $model
     * @param Request $request
     * @return bool|mixed
     * @throws IllegalActionException
     */
    public function before(Model $model, Request $request)
    {
        if($model->user_id !== $request->user()->id){
            throw new IllegalActionException('Client does not belong to this user');
        }

        return true;
    }

    /**
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