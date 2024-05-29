<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $primaryKey = 'task_id';

    protected $fillable = [
        'title',
        'description',
        'expiration_date',
        'is_complete'
    ];

    protected function casts(): array
    {
        return [
            'expiration_date' => 'datetime',
            'is_complete' => 'boolean'
        ];
    }
}
