<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 *
 */
class Sekolah extends Model
{
    protected $table = 't_murid';
    protected $fillable = ['id', 'nama','kelas','jurusan'];
    public $timestamps = false;
}
