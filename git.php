<?php
`git fetch --all`;
`git reset --hard origin/master`;
`composer update`;
`php artisan migrate`;