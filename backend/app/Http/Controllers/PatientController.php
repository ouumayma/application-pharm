<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function show($id)
    {
        try {
            $patient=patient::findOrFail($id);
            return response()->json($patient);
            } catch (\Exception $e) {
            return response()->json("probleme de récupération des données");
            }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $patient=Patient::findorFail($id);
            $patient->update($request->all());
            return response()->json($patient);
            } catch (\Exception $e) {
            return response()->json("probleme de modification");
            }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        try {
            $patient=patient::findOrFail($id);
            $patient->delete();
            return response()->json("patient supprimée avec succes");
            } catch (\Exception $e) {
            return response()->json("probleme de suppression de patient");
            }
    }
}
