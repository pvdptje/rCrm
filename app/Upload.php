<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    /**
     * Get the owning uploadable model.
     */
    public function uploadable()
    {
        return $this->morphTo();
    }
}
