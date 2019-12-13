<?php

namespace App\Observers;

use App\Client;
use App\Traits\SetsAttributesToCarbon;

/**
 * Class ClientObserver
 * @package App\Observers
 */
class ClientObserver
{
    use SetsAttributesToCarbon;

    /**
     * @param Client $client
     */
    public function creating(Client $client)
    {
        $this->setDateToCarbon($client, 'date_of_birth');
    }

    /**
     * @param Client $client
     */
    public function updating(Client $client)
    {
        $this->setDateToCarbon($client, 'date_of_birth');
    }
}
