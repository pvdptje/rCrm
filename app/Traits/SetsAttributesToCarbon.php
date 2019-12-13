<?php
/**
 * Class SetsAttributesToCarbon
 * @package App\Traits
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\Traits;


use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

trait SetsAttributesToCarbon
{
    /**
     * @param Model $model
     *
     * When a non-engligh formatted date is sent
     * through the request, attribute casting a date
     * on a model will throw an error.
     *
     * This will prevent any incorrect formats
     * going to our database.
     */
    protected function setDateToCarbon(Model $model, $attribute)
    {
        if ($model->$attribute) {
            $model->$attribute = new Carbon($model->$attribute);
        }
    }
}