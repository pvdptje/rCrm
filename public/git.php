<?php
set_time_limit(300); // 5 minutes should be more than enough for now.
error_reporting(E_ALL);
//@todo BIG TODO -- Implement some security checks :D
try {
    `git pull`;
    `cd ../ && composer update`;
    `cd ../ && php artisan migrate`;
} catch (\Exception $e){
    http_response_code(500);
    exit($e->getMessage());
}

