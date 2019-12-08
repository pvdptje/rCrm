<?php
/**
 * Class Uploader
 * @package App\rCrm
 * @author Patrick van der Pols <patrickvanderpols@gmail.com>
 */

namespace App\rCrm;

use App\Account;
use App\Client;
use App\Upload;
use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;

/**
 * Class Uploader
 * @package App\rCrm
 */
class Uploader
{

    protected $upload;

    public function __construct(Upload $upload)
    {
        $this->upload = $upload;
    }

    /**
     * @var Model
     */
    protected $uploadable;

    /**
     * @var UploadedFile
     */
    protected $uploadedFile;

    /**
     * @param Model $model
     * @return $this
     */
    public function setUploadable(Model $model)
    {
        $this->uploadable = $model;

        return $this;
    }

    /**
     * @param UploadedFile $file
     * @return $this
     */
    public function setUploadedFile(UploadedFile $file)
    {
        $this->uploadedFile = $file;

        return $this;
    }

    public function store($selector, $overwrite = null)
    {
        $uploadDir = 'uploads/'.md5(get_class($this->uploadable));
        $id = $this->uploadable->id;

        $fileName = $this->uploadedFile->getClientOriginalName();
        if(!$overwrite){ // If we do not want to overwrite, we make a prefix
            $fileName = uniqid('rcrm_').mt_rand(0,10).$fileName;
        }

        $path = $uploadDir.'/'.$id.'/'.$fileName;

        $this->upload->create([
            'path' => $path,
            'selector' => $selector,
            'name' => $this->uploadedFile->getClientOriginalName(),
            'original_name' => $this->uploadedFile->getClientOriginalName(),
            'uploadable_id' => $this->uploadable->id,
            'uploadable_type' => get_class($this->uploadable)
        ]);

        $this->uploadedFile->move(
            public_path($uploadDir.'/'.$id),
            $fileName
        );

        return asset($uploadDir.'/'.$id.'/'.$fileName);
    }

}