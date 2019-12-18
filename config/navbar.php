<?php

return [
    [
        'route' => 'home.index',
        'icon' => 'home',
        'name' => 'Home',
        'accessVerifier' => \App\rCrm\Navbar\AccessVerifiers\GenericAccessVerifier::class,
        'submenu'=> [
             [
                'name' => 'Home sub item',
                'route' => 'home.index',
                'submenu' => false
             ],
             [
                 'name' => 'Home sub item',
                 'route' => 'home.index',
                 'submenu' => false
             ],
             [
                 'name' => 'Home sub item',
                 'route' => 'home.index',
                 'submenu' => false
             ],
             [
                 'name' => 'Home sub item',
                 'route' => 'home.index',
                 'submenu' => [
                     [
                         'name' => 'Home sub sub item',
                         'route' => 'home.index',
                         'submenu' => [
                             [
                                 'name' => 'Home sub sub sub item',
                                 'route' => 'home.index',
                             ]
                         ]
                     ]
                 ]
             ],
             [
                 'name' => 'Home sub item',
                 'route' => 'home.index',
                 'submenu' => false
             ],
        ]
    ],
];
