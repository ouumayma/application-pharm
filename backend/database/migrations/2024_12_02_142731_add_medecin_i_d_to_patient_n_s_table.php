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
        Schema::table('patient_n_s', function (Blueprint $table) {
            $table->unsignedBigInteger('medecinID')->nullable(); // Ajoute la colonne medecinID
            $table->foreign('medecinID')->references('id')->on('medecins')->onDelete('restrict'); // Clé étrangère
        });
    }
    
    public function down(): void
    {
        Schema::table('patient_n_s', function (Blueprint $table) {
            $table->dropForeign(['medecinID']);
            $table->dropColumn('medecinID');
        });
    }
    
};
