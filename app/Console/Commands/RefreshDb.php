<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class RefreshDb extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Rebuild the database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        if(in_array(env('APP_ENV'), ['local', 'staging'])){
            $this->call('migrate:refresh');
            $this->call('db:seed');
            return;
        }

        $this->info('This command only works on local development.');
    }
}
