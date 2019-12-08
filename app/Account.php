<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Account
 * @package App
 */
class Account extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
      'company_name', 'street', 'house_number', 'city', 'province', 'country', 'invoice_email', 'postcode'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_to_account');
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function uploads()
    {
        return $this->morphMany(Upload::class, 'uploadable');
    }
}
