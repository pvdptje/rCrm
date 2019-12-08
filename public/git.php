<?php
set_time_limit(300); // 5 minutes should be more than enough for now.
`git pull`;
`cd ../ && composer update && npm update`;
`php artisan migrate`;
`npm run prod`;

