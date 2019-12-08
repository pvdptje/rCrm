<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    protected $fillable = [
        'id', 'path', 'selector', 'name', 'original_name',
        'uploadable_id', 'uploadable_type', 'updated_at', 'created_at'
    ];
    /**
     * Get the owning uploadable model.
     */
    public function uploadable()
    {
        return $this->morphTo();
    }
}
