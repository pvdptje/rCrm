<?php
/**
 * Class ActionFactory
 * @package App\rCrm
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\rCrm\Action;
use App\rCrm\Action\Exceptions\ActionException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;

/**
 * Class ActionFactory
 * @package App\rCrm
 */
class ActionFactory
{
    use ValidatesRequests;

    /**
     * @var array
     */
    protected $actions;

    /**
     * @var string
     */
    protected $namespace;

    /**
     * @var string
     */
    protected $actionName;

    /**
     * @var Application
     */
    protected $app;

    /**
     * @var ActionInterface
     */
    protected $actionClass;


    /**
     * ActionFactory constructor.
     * @param Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
        $this->actions = config('actions');
    }

    /**
     * @param string $namespace
     * @return $this
     * @throws ActionException
     */
    public function setNamespace(string $namespace)
    {
        if(!array_key_exists($namespace, $this->actions)){
            throw new ActionException('Invalid action namespace');
        }

        $this->namespace = $namespace;

        return $this;
    }


    /**
     * @param string $actionName
     * @return $this
     * @throws ActionException
     */
    public function setActionName(string $actionName)
    {
        if(!$this->namespace){
            throw new ActionException('Namespace must be set before action name');
        }

        if(!array_key_exists($actionName, $this->actions[$this->namespace])){
            throw new ActionException('Invalid action name');
        }

        $this->actionName = $actionName;

        return $this;
    }

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    private function setActionClass()
    {
        $this->actionClass = $this->app->make($this->actions[$this->namespace][$this->actionName]);
    }

    private function performActions(Request $request)
    {
        $this->getModelIds($request)->each(function($id) use($request){

            $model = $this->getModelFromRequest($id, $request);

            if(method_exists($this->actionClass, 'rules')){
                $this->validate($request, $this->actionClass->rules(),
                method_exists($this->actionClass, 'messages') ? $this->actionClass->messages() : [],
                    method_exists($this->actionClass, 'attributes') ? $this->actionClass->attributes() : []
                );
            }

            $this->actionClass->before($model, $request);
            $this->actionClass->handle($model, $request);

            if(method_exists($this->actionClass, 'after')){
                $this->actionClass->after($model, $request);
            }
        });
    }

    /**
     * @param int $id
     * @param Request $request
     * @return Model
     */
    private function getModelFromRequest($id, Request $request)
    {
        $modelName = $request->get('actionModel');

        return $modelName::findOrFail($id);
    }

    /**
     * @param $request
     * @return \Illuminate\Support\Collection
     */
    private function getModelIds($request)
    {
        if(is_string($ids = $request->get('actionIds', []))){
            return collect(explode(',',$ids));
        }

        return collect($ids);
    }

    /**
     * @param Request $request
     * @return mixed
     * @throws \Exception
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function handle(Request $request)
    {
        $this->validateActionRequest($request);
        $this->setActionClass();

        try {
            $this->performActions($request);
        } catch (\Exception $e){

            if(method_exists($this->actionClass, 'fail')){
                return $this->actionClass->fail($e);
            }

            throw $e;
        }

        return method_exists($this->actionClass, 'success') ? $this->actionClass->success() : null;
    }

    /**
     * @param Request $request
     * @throws \Illuminate\Validation\ValidationException
     */
    private function validateActionRequest(Request $request)
    {
        $this->validate($request, [
            'actionModel' => [
                'max:255',
                'required',
                function ($attribute, $value, $fail) {
                    if (!class_exists($value)) {
                        $fail($attribute . ' does not exist');
                    }
                }
            ]
        ]);
    }

}