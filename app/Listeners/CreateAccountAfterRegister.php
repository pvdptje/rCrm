<?php

namespace App\Listeners;

use App\Account;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;

/**
 * Class CreateAccountAfterRegister
 * @package App\Listeners
 */
class CreateAccountAfterRegister
{
    /**
     * @var Request
     */
    protected $request;

    /**
     * CreateAccountAfterRegister constructor.
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * @param Registered $event
     * @return Account
     */
    public function handle(Registered $event) : Account
    {
        $account = Account::create([
            'company_name' => $this->request->get('company_name'),
            'street' => $this->request->get('street'),
            'house_number' => $this->request->get('house_number'),
            'city' => $this->request->get('city'),
            'province' => $this->request->get('province'),
            'postcode' => $this->request->get('postcode'),
            'country' => $this->request->get('country'),
            'invoice_email' => $event->user->email // User has to change this later if he wants to :).
        ]);

        $event->user->accounts()->sync($account);

        return $account;
    }
}
