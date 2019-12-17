<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});

Auth::routes();


Route::get('/test', function(){
   return inertia('Test');
});

Route::group(['middleware' => ['set.locale', 'auth']], function(){
    Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

    Route::get('/home', function(){
        return redirect('/account');
    });

    Route::get('/account', 'AccountController@index')->name('account.index');
    Route::post('/account/update', 'AccountController@update')->name('account.update');

    Route::get('/user/create', 'AccountController@showAddUser')->name('account.addUser'); #@todo move this to user controller. uc@create
    Route::post('/user/store', 'AccountController@storeAddUser')->name('account.addUser.store'); #@todo move this to user controller. uc@store

    Route::get('/user/edit/{user?}', 'UserController@edit')->name('user.edit');
    Route::post('/user/edit/{user?}', 'UserController@update')->name('user.update');
    Route::get('/user/destroy/{user?}', 'UserController@destroy')->name('user.destroy');

    Route::get('/settings', 'SettingsController@index')->name('settings.index');


    Route::post('/upload/{uploadableType}/{selector}', 'UploadController@upload')->name('upload.upload');
    Route::post('/user/saveSetting', 'UserController@saveSetting')->name('user.saveSetting');

   /* Route::get('/appointments', 'AppointmentController@index')->name('appointment.index');
    Route::get('/appointment/create', 'AppointmentController@create')->name('appointment.create');
    Route::post('/appointment/store', 'AppointmentController@store')->name('appointment.store');*/

    Route::get('/clients', 'ClientController@index')->name('client.index');
    Route::get('/client/create', 'ClientController@create')->name('client.create');
    Route::post('/client/store', 'ClientController@store')->name('client.store');



    Route::post('/action/{actionNamespace}/{actionName}', 'ActionController@handle')->name('action.handle');







    Route::get('/oauth/redirect', 'Auth\OAuthController@redirectToGoogle')->name('oauth.google.redirect');
    Route::get('/oauth/callback', 'Auth\OAuthController@handleGoogleCallback')->name('oauth.google.callback');
});


Route::get('/404', function(){
   abort(501);
});