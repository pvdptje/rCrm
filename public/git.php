<?php
$headers = getallheaders();
if(isset($headers['X-Hub-Signature']) && $headers['X-GitHub-Event'] == 'push') {
    `git fetch --all`;
    `git reset --hard origin/master`;
    `composer update`;
    `cd ../ && php artisan migrate`;
    exit;
}

echo 'get the fuck out';