<?php

namespace App\Http\Controllers;

use App\Client;
use App\Events\ClientModified;
use App\Http\Requests\SaveClient as SaveClientRequest;

use App\Jobs\SaveClient as Job;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

/**
 * Class ClientController
 * @package App\Http\Controllers
 */
class ClientController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index( Request $request )
    {
        $clients = $request->user()->account->clients()->orderBy('last_name', 'asc')->paginate($request->get('per_page', 25));

        return view('client.index', compact('clients'));
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        return inertia('Client/Create', [
            'title' => __('Add a new client'),
            'breadcrumbs' => [
                ['/' => __('Home')],
                ['/clients' => __('Clients')]
            ]
        ]);
    }

    /**
     * @param SaveClientRequest $request
     * @return RedirectResponse
     */
    public function store(SaveClientRequest $request, Client $client)
    {
        $this->dispatch(new Job($user = $request->user(),
            $request->only($client->getFillable())
        ));

        event(new ClientModified($user, $client, 'store'));

        return redirect()->route('client.index')
            ->with('message', __('Client successfully added!'));
    }
}
