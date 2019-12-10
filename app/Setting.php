<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = ['key', 'value'];
    /**
     * Get the owning settingable model.
     */
    public function settingable()
    {
        return $this->morphTo();
    }
}
