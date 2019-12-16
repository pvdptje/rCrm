<?php

/**
 * A whitelist of keys a user can save. This is used in the SaveSetting form request.
 * @see \App\Http\Requests\SaveSetting
 */
return [
    //
    'wage' => [
        'rules' => [''], // @todo Make a 'price' validation rule.
        'attribute' => 'Your wage'
    ],
    //i.e hourly / unit
    'wage_unit' => [

    ],
    'google_calendar_id' => [
        'rules' => ['max:255'],
        'attribute' => 'Google Calendar Id'
    ],
    'start_invoicenumber_at' =>  [
        'rules' => ['number'],
        'attribute' => 'Start invoice number at'
    ],
    'invoicenumber_prefix' =>  [
        'rules' => ['max:15'],
        'attribute' => 'Invoice number prefix'
    ],
];