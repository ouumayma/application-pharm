<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;
    protected $table = [''];

//    public function demandeP(){
//        return $this->hasMany(Demande::class, 'patientId');
//    }

}
