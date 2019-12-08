<?php
/**
 * Class BaseRepository
 * @package App\Repositories
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

class BaseRepository
{
    /**
     * @param Model $model
     * @param $selector
     * @return \Illuminate\Database\Eloquent\Model|null|object|static
     */
    public function getUpload(Model $model, $selector)
    {
        return $model->uploads()->where('selector', $selector)->orderby('id', 'desc')->first();
    }
}