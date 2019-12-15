<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Client
 * @package App
 */
class Client extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'street',
        'house_number',
        'province',
        'phone',
        'country',
        'date_of_birth',
        'postcode',
        'account_id',
        'user_id'
    ];


    /**
     * @return string
     */
    public function getNameAttribute() : string
    {
        return "{$this->first_name} {$this->last_name}";
    }

    /**
     * @return Carbon|void
     */
    public function getDobAttribute()
    {
        return $this->date_of_birth ? new Carbon($this->date_of_birth) : null;
    }
}
