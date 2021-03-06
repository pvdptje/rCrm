<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = \App\User::create([
            'name' => 'Patrick van der Pols',
            'email' => 'patrickvanderpols@live.nl',
            'password' => bcrypt('dddcom232'),
        ]);

        $account = \App\Account::create([
            'company_name' => 'Acme',
            'street' => 'Dijkgraaf',
            'house_number' => '2',
            'postcode' => '3155ga',
            'province' => 'Zuid Holland',
            'phone' => '12313123123',
            'city' => 'Maasland',
            'country' => 'Nederland',
            'invoice_email' =>  'patrickvanderpols@live.nl',
        ]);

        $user->accounts()->sync($account);
    }
}
