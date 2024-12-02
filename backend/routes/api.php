<?php

use App\Http\Controllers\MedicamentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    Route::resource('medicaments', MedicamentController::class);
    });