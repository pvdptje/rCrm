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
    return view('welcome');
});

Auth::routes();


Route::group(['middleware' => 'auth'], function(){
    Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

    Route::get('/home', function(){


        $user = \Illuminate\Support\Facades\Auth::user();

        $user->saveSetting('key', 'value2');

        dd('testing settings');
        return redirect('/account');
    });

    Route::get('/account', 'AccountController@index')->name('account.index');
    Route::post('/account/update', 'AccountController@update')->name('account.update');


    Route::get('/user/create', 'AccountController@showAddUser')->name('account.addUser'); #@todo move this to user controller. uc@create
    Route::post('/user/store', 'AccountController@storeAddUser')->name('account.addUser.store'); #@todo move this to user controller. uc@store

    Route::get('/user/edit/{user?}', 'UserController@edit')->name('user.edit');
    Route::post('/user/edit/{user?}', 'UserController@update')->name('user.update');
    Route::get('/user/destroy/{user?}', 'UserController@destroy')->name('user.destroy');

    Route::post('/upload/{uploadableType}/{selector}', 'UploadController@upload')->name('upload.upload');
});

