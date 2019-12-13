<?php

namespace App\Http\Controllers;


use App\rCrm\Action\ActionFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ActionController
 * @package App\Http\Controllers
 */
class ActionController extends Controller
{
    /**
     * @var ActionFactory
     */
    protected $actionFactory;

    /**
     * ActionController constructor.
     * @param ActionFactory $actionFactory
     */
    public function __construct(ActionFactory $actionFactory)
    {
        $this->actionFactory = $actionFactory;
    }

    /**
     * @param $actionNamespace
     * @param $actionName
     * @param Request $request
     * @return Response
     * @throws \App\rCrm\Action\Exceptions\ActionException
     * @throws \Exception
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function handle($actionNamespace, $actionName, Request $request)
    {
        if($response = $this->actionFactory->setNamespace($actionNamespace)
            ->setActionName($actionName)
            ->handle($request)){
            return $response;
        };

        if($request->ajax()){
            return new JsonResponse(['message' => __('Action success')]);
        }

        return redirect()->back()->with('message', __('Action success'));
    }
}
