<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class RefreshDb extends DropDb
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
            // Using default php mysqli here.
            $this->info('Dropping database');
            $this->doQueries();
            $this->info(sprintf('Database %s dropped', env('DB_DATABASE')));
            $this->info('starting migrations..');
            $this->call('migrate');
            $this->info('migrations done..');
            $this->info('starting seed..');
            $this->call('db:seed');
            $this->info('seeding done..');
            $this->info('All done');
            return;
        }

        $this->info('This command only works on local development.');
    }
}
