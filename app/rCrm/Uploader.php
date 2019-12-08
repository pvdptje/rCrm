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
    /**
     * @var Upload
     */
    protected $upload;

    /**
     * @return Upload
     */
    public function getUpload(): Upload
    {
        return $this->upload;
    }

    /**
     * Uploader constructor.
     * @param Upload $upload
     */
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

    /**
     * Store an uploaded file
     * @param $selector
     * @param null $overwrite
     * @return string
     */
    public function store($selector, $overwrite = null)
    {
        $uploadDir = 'uploads/'.md5(get_class($this->uploadable));
        $id = $this->uploadable->id;

        $fileName = $this->uploadedFile->getClientOriginalName();
        if(!$overwrite){ // If we do not want to overwrite, we make a prefix
            $fileName = uniqid('rcrm_').mt_rand(0,10).$fileName;
        }

        $path = $uploadDir.'/'.$id.'/'.$fileName;

        $uploadData = [
            'path' => $path,
            'selector' => $selector,
            'name' => $this->uploadedFile->getClientOriginalName(),
            'original_name' => $this->uploadedFile->getClientOriginalName(),
            'uploadable_id' => $this->uploadable->id,
            'uploadable_type' => get_class($this->uploadable)
        ];

        $method = 'create';
        if($overwrite){
            $oldModel = $this->upload->newQuery()->where('uploadable_id', $this->uploadable->id)
            ->where('uploadable_type', get_class($this->uploadable))
            ->where('selector', $selector)
            ->first();


            if($oldModel){
                @unlink(public_path($oldModel->path));
                $this->upload = $oldModel;
                $method = 'update';
            }
        }

        $this->upload->$method($uploadData);

        $this->uploadedFile->move(
            public_path($uploadDir.'/'.$id),
            $fileName
        );

        return asset($uploadDir.'/'.$id.'/'.$fileName);
    }

}