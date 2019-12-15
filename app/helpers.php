<?php

if(!function_exists('get_provinces')){
    function get_provinces(): array
    {
        return [
            'Drenthe' => __('Drenthe'),
            'Flevoland' => __('Flevoland'),
            'Friesland' => __('Friesland'),
            'Gelderland' => __('Gelderland'),
            'Groningen' => __('Groningen'),
            'Limburg' => __('Limburg'),
            'Noord Brabant' => __('North Brabant'),
            'Noord Holland' => __('North Holland'),
            'Overijsel' => __('Overijssel'),
            'Zuid Holland' => __( 'South Holland' ),
            'Utrecht' => __('Utrecht'),
            'Zeeland' => __('Zeeland')
        ];
    }
}

if(!function_exists('get_translation_file_contents')){
    function get_translation_file_contents($path): stdClass
    {
        if(file_exists($path)){
            return json_decode(file_get_contents($path));
        }

        return new stdClass();
    }
}