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

Route::group(['middleware'=>'cors'],  function(){
  Route::group(['prefix'=>'api/v1'], function(){
    Route::get('siswa', 'SekolahController@index');
    Route::get('siswa/{id}', 'SekolahController@show');
    Route::post('siswa', 'SekolahController@store');
    Route::post('siswa/delete', 'SekolahController@destroy');
    Route::post('siswa/{id}', 'SekolahController@update');
  });
});
