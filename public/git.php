<?php
/**
 * @todo
 * This file is very unsafe at the moment. We need to verify the secret send to us by github
 * @todo .. find out how to verify secret.
 */
$headers = getallheaders();
if(isset($headers['X-Hub-Signature']) && $headers['X-GitHub-Event'] == 'push') {
    `git fetch --all`;
    `git reset --hard origin/master`;
    `composer update`;
    `cd ../ && php artisan migrate`;
    exit;
}

echo 'get the fuck out';