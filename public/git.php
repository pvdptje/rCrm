<?php
set_time_limit(300); // 5 minutes should be more than enough for now.
error_reporting(E_ALL);
try {
    `git pull`;
    `cd ../ && composer update && npm update`;
    `cd ../ && php artisan migrate`;
    `cd ../ && npm run prod`;
} catch (\Exception $e){
    http_response_code(500);
    exit($e->getMessage());
}

