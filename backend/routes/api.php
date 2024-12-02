<?php

use App\Http\Controllers\MedecinController;
use App\Http\Controllers\MedicamentController;
use App\Http\Controllers\PatientNController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    Route::resource('medicaments', MedicamentController::class);
    });

    Route::middleware('api')->group(function () {

        Route::resource('medecins', MedecinController::class);
        
        });


        Route::middleware('api')->group(function () {

            Route::resource('patients', PatientNController::class);
            
            });

            Route::get('/patients/{idmed}', [PatientNController::class, 'showPatientsByMed']);
            
            Route::get('/medicaments', [MedicamentController::class, 'medicamentsPaginate']);

