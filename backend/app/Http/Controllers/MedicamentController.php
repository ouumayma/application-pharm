<?php

namespace App\Http\Controllers;

use App\Models\Medicament;
use Illuminate\Http\Request;

class MedicamentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $medicaments = Medicament::all();
            return response()->json($medicaments);
        } catch (\Exception $e) {
            return response()->json("probleme de récupération de la liste des medicaments");
        }
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $medicament = new Medicament([
                "nomcategorie" => $request->input("nomcategorie"),
                "imagecategorie" => $request->input("imagecategorie")
            ]);
            $medicament->save();


            return response()->json($medicament);
        } catch (\Exception $e) {
            return response()->json("insertion impossible");
        }
    }
    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $medicament = Medicament::findOrFail($id);
            return response()->json($medicament);
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
            $medicament = medicament::findorFail($id);
            $medicament->update($request->all());
            return response()->json($medicament);
        } catch (\Exception $e) {
            return response()->json("probleme de modification");
        }
    }
    /**
    
    
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $medicament = medicament::findOrFail($id);
            $medicament->delete();
            return response()->json("medicament supprimée avec succes");
        } catch (\Exception $e) {
            return response()->json("probleme de suppression de medicament");
        }
    }
}
