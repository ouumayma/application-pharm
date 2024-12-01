<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    use HasFactory;
//    protected $fillable = ['date','state','medId','patientId','pharmacyId','totalePrice',];
//
//    public function medecin(){
//        return $this->belongsTo(Medecin::class,'medId');
//    }
//    public function patient(){
//        return $this->belongsTo(Patient::class,'patientId');
//    }
//    public function pharmacy(){
//        return $this->belongsTo(Pharmacien::class,'pharmacyId');
//    }
}
