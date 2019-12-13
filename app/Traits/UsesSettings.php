<?php

namespace App\Traits;

use App\Setting;

/**
 * trait UsesSettings
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */
trait UsesSettings
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function settings()
    {
        return $this->morphMany(Setting::class, 'settingable');
    }

    /**
     * @param $key
     * @param null $default
     * @return mixed|null
     */
    public function setting($key, $default = null)
    {
        $setting = $this->settings()->where('key', $key)->first();

        return $setting ? $setting->value : $default;
    }

    /**
     * @param $key
     * @param null $value
     * @return \Illuminate\Database\Eloquent\Model | bool
     */
    public function saveSetting($key, $value = null)
    {
        $setting = $this->settings()->where('key',$key)->first();

        return $setting ? $setting->update(['value' => $value]) : $this->settings()->create(['key' => $key, 'value' => $value]);
    }
}