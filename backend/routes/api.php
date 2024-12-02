<?php

use App\Http\Controllers\MedicamentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
Route::middleware('api')->group(function () {
    Route::resource('medicaments', MedicamentController::class);
    });

    Route::group([
        'middleware' => 'api',
        'prefix' => 'users'
        ], function ($router) {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/register', [AuthController::class, 'register']);
        // Route::post('/logout', [AuthController::class, 'logout']);
        // Route::post('/refreshToken', [AuthController::class, 'refresh']);
        // Route::get('/user-profile', [AuthController::class, 'userProfile']);
        });
        Route::get('users/verify-email', [AuthController::class, 'verifyEmail'])->name('verify.email');