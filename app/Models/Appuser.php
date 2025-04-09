<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appuser extends Model
{
    use HasFactory;
    protected $table = 'appusers';
    protected $fillable = [
        'username',
        'phonenumber',
        'password',
    ];

}
