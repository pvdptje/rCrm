<?php

namespace App;

use App\Traits\UsesSettings;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Account
 * @package App
 */
class Account extends Model
{
    use UsesSettings;

    /**
     * @var array
     */
    protected $fillable = [
      'company_name', 'street', 'house_number', 'city', 'province', 'country', 'invoice_email', 'postcode'
    ];

    /**
     * @var array
     */
    protected $appends = ['logo'];

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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    /**
     * @return bool|string
     */
    public function getLogoAttribute()
    {
        $upload = $this->uploads()->where('selector', 'logo')->orderBy('created_at', 'desc')->first();
        if($upload){
            return asset($upload->path);
        }

        return false;
    }


}