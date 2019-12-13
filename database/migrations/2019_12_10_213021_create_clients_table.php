<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->nullable(); // We make this nullable, so it stays in the account and can also be moved to another user within the same account
            $table->unsignedBigInteger('account_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('account_id')->references('id')->on('accounts');
            $table->string('email')->unique();
            $table->string('first_name');
            $table->string('last_name');
            // We want to make these fields optional
            $table->string('street')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('house_number')->nullable();
            $table->string('postcode')->nullable();
            $table->string('province')->nullable();
            $table->string('country')->nullable();
            $table->string('phone')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
