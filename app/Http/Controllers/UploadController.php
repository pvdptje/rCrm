<?php
/**
 * Class UploadController
 * @package App\Http\Controllers
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\Http\Controllers;

use App\Account;
use App\Client;
use App\rCrm\Uploader;
use App\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;

/**
 * Class UploadController
 * @package App\Http\Controllers
 */
class UploadController extends Controller
{
    /**
     * @var Uploader
     */
    protected $uploader;

    /**
     * @var Guard
     */
    protected $auth;

    /**
     * @var array
     */
    protected $uploadableTypes = ['user' => User::class , 'account' => Account::class , 'client' => Client::class , ];

    /**
     * UploadController constructor.
     * @param Uploader $uploader
     * @param Guard $auth
     */
    public function __construct(Uploader $uploader, Guard $auth)
    {
        $this->uploader = $uploader;
        $this->auth = $auth;
    }

    /**
     * @param $uploadableType
     * @param $selector
     * @param null $clientId
     * @throws \Exception
     */
    public function upload(Request $request, $uploadableType, $selector)
    {
        if (!isset($this->uploadableTypes[$uploadableType])){
            throw new \Exception('Invalid uploadable type');
        }

        switch ($uploadableType){
            case 'user':
                $uploadable = $this
                    ->auth
                    ->user();
                break;
            case 'account':
                $uploadable = $this
                    ->auth
                    ->user()
                    ->accounts()
                    ->first();
                break;
            case 'client':
                $uploadable = $this->uploadableTypes[$uploadableType]::where('id', $request->get('client_id'))->where('account_id', $this
                    ->auth
                    ->user()
                    ->accounts()
                    ->first()
                    ->id);
                break;
        }

        return $this->uploader->setUploadable($uploadable)
            ->setUploadedFile($request->file($selector))
            ->store($selector, $request->get('overwrite'));
    }
}

