<?php
/**
 * Class Action
 * @package App\rCrm
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\rCrm\Action;

/**
 * Class Action
 * @package App\rCrm
 *
 *
 * Extended classes can have some optional methods:
 *
 * succes():
 * do something when all the actions are done, or return a Response
 *
 * fail($e):
 * do something when an exception occurs while doing the actions
 *
 * And also the default Laravel form request methods if extra validation is nessecary (rules,attributes,messages)
 */
abstract class Action
{

}