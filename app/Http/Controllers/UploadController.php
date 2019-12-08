<?php
/**
 * Class UploadController
 * @package App\Http\Controllers
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\Http\Controllers;

use App\Account;
use App\Client;
use App\Events\BeforeFileUpload;
use App\Events\NewFileUploaded;
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
     * @param Request $request
     * @param $uploadableType
     * @param $selector
     * @return string
     * @throws \Exception
     */
    public function upload(Request $request, $uploadableType, $selector)
    {

        event( new BeforeFileUpload($request, $uploadableType, $selector));

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

        $fileUrl = $this->uploader->setUploadable($uploadable)
            ->setUploadedFile($request->file($selector))
            ->store($selector, $request->get('overwrite'));

        event( new NewFileUploaded($this->uploader->getUpload(), $selector)); #Throw an event so we can do something with the file if necessary later on.

        return $fileUrl;
    }
}

