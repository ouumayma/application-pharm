<?php

use App\Http\Controllers\MedecinController;
use App\Http\Controllers\MedicamentController;
use App\Http\Controllers\PatientNController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::middleware('api')->group(function () {
    Route::resource('medicaments', MedicamentController::class);
});


<<<<<<< HEAD
=======

>>>>>>> e3638992b496672fe5c872d373dd30856f1a1ee3
Route::group([
    'middleware' => 'api',
    'prefix' => 'users'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::get('/users', [AuthController::class, 'index']);
<<<<<<< HEAD
    Route::put('/modifyUser/{id}', [AuthController::class, 'update']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refreshToken', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::get('users/verify-emailUnique', [AuthController::class, 'verifyEmailunique']);
    Route::get('users/verify-emailUnique', [AuthController::class, 'verifyEmailunique']);
    Route::delete('delete/{id}', [AuthController::class, 'destroy']);
});
Route::get('users/verify-email', [AuthController::class, 'verifyEmail'])->name('verify.email');

Route::middleware('api')->group(function () {

    Route::resource('medecins', MedecinController::class);
=======
    // Route::post('/logout', [AuthController::class, 'logout']);
    // Route::post('/refreshToken', [AuthController::class, 'refresh']);
    // Route::get('/user-profile', [AuthController::class, 'userProfile']);
});
Route::get('users/verify-email', [AuthController::class, 'verifyEmail'])->name('verify.email');

    Route::group([
        'middleware' => 'api',
        'prefix' => 'users'
        ], function ($router) {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/register', [AuthController::class, 'register']);
        Route::get('/users', [AuthController::class, 'index']);
         Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/refreshToken', [AuthController::class, 'refresh']);
        Route::get('/user-profile', [AuthController::class, 'userProfile']);
        Route::get('users/verify-emailUnique', [AuthController::class, 'verifyEmailunique']);
        });
        Route::get('users/verify-email', [AuthController::class, 'verifyEmail'])->name('verify.email');


Route::middleware('api')->group(function () {

    Route::resource('medecins', MedecinController::class);

>>>>>>> e3638992b496672fe5c872d373dd30856f1a1ee3
});


Route::middleware('api')->group(function () {

    Route::resource('patients', PatientNController::class);
<<<<<<< HEAD
});

=======

});

>>>>>>> e3638992b496672fe5c872d373dd30856f1a1ee3


Route::get('/patients/{idmed}', [PatientNController::class, 'showPatientsByMed']);

<<<<<<< HEAD
Route::get('/medicaments', [MedicamentController::class, 'medicamentsPaginate']);
=======
Route::get('/medicaments', [MedicamentController::class, 'medicamentsPaginate']);
>>>>>>> e3638992b496672fe5c872d373dd30856f1a1ee3
