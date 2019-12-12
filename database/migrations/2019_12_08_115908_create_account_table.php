<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('company_name');
            $table->string('street');
            $table->string('house_number');
            $table->string('postcode');
            $table->string('province');
            $table->string('city');
            $table->string('country')->default('Nederland');
            $table->string('invoice_email');
            $table->timestamps();
        });

        Schema::create('user_to_account', function (Blueprint $table){
           $table->bigIncrements('id');
           $table->unsignedBigInteger('user_id');
           $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
           $table->unsignedBigInteger('account_id');
           $table->foreign('account_id')->references('id')->on('accounts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_to_account');
        Schema::dropIfExists('accounts');
    }
}
