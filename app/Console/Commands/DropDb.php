<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DropDb extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'drop:db';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Drop the database';

    protected $link;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if(in_array(env('APP_ENV'), ['local', 'staging'])){
            // Using default php mysqli here.
            $this->link = mysqli_connect(env('DB_HOST'), env('DB_USERNAME'), env('DB_PASSWORD'), env('DB_DATABASE'));

           $this->query( "SET FOREIGN_KEY_CHECKS = 0");
           $this->query( "SET @tables = NULL");
           $this->query( sprintf("SELECT GROUP_CONCAT(table_schema, '.', table_name) INTO @tables
              FROM information_schema.tables 
              WHERE table_schema = '%s'", env('DB_DATABASE')));
           $this->query( "SET @tables = CONCAT('DROP TABLE ', @tables)");
           $this->query( "PREPARE stmt FROM @tables");
           $this->query( " EXECUTE stmt");
           $this->query( " DEALLOCATE PREPARE stmt");
           $this->query( " SET FOREIGN_KEY_CHECKS = 1");

            $this->info(sprintf('Database %s dropped', env('DB_DATABASE')));
            return;
        }

        $this->info('This command only works on local development.');
    }

    protected function query($sql)
    {
        if(!mysqli_query($this->link, $sql)){
            $this->error($this->link->error);
        }
    }
}
