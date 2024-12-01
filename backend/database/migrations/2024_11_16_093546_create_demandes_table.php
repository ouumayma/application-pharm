<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('demandes', function (Blueprint $table) {
            $table->id();
//            $table->date('crationDate');
//            $table->enum('state', [
//               '',
//
//            ]);
//            $table->unsignedBigInteger('medId'); //ref foreign key of medecin
//            $table->foreign('medId')
//                ->references('id')
//                ->on('medicaments')
//                ->onDelete('restrict');
//            //patient
//            $table->unsignedBigInteger('patientId');
//            $table->foreign('patientId')
//                ->references('id')
//                ->on('patients')
//                ->onDelete('restrict');
//            //pharmacy
//            $table->unsignedBigInteger('pharmacyId');
//            $table->foreign('pharmacyId')
//                ->references('id')
//                ->on('pharmaciens')
//                ->onDelete('restrict');
//            $table->double('totalPrice');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demandes');
    }
};
