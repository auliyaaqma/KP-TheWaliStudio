<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sekolah;

class SekolahController extends Controller
{
    public function index(){
      $request=Sekolah::all();
      return $request;
    }

    public function show($id){
      $request=Sekolah::find($id);
      return $request;
    }

    public function store(Request $req){
      $input = $req->only('nama','kelas','jurusan');

      $query = Sekolah::create($input);
      if($query){
        $data['success'] = 'success';
        return $data;
      } else {
        $data['success'] = 'error';
        return $data;
      }
    }

    public function update(Request $req, $id){
      $input = $req->all();
      $sekolah = Sekolah::where('id',$id);

      $query = $sekolah->update($input);
      if($query){
        $data['success'] = 'success';
        return $data;
      } else {
        $data['success'] = 'error';
        return $data;
      }
    }

    public function destroy(Request $req){
      $input = $req->only('id');
      $sekolah = Sekolah::find($input['id']);

      $query = $sekolah->delete();
      if($query){
        $data['success'] = 'success';
        return $data;
      }
    }
}
