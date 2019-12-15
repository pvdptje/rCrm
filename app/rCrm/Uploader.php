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
use Illuminate\Contracts\Filesystem\Filesystem;
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
     * @var Filesystem
     */
    protected $filesystem;

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
    public function __construct(Upload $upload, Filesystem $filesystem)
    {
        $this->upload = $upload;
        $this->filesystem = $filesystem;
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
     * @param UploadedFile | string $file
     * @return $this
     */
    public function setUploadedFile($file)
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

        if(is_string($this->uploadedFile))
            return $this->storeImageUpload($selector, $overwrite, $uploadDir, $id);

        return $this->storeRegularUpload($selector, $overwrite, $uploadDir, $id);
    }

    /**
     * @param $selector
     * @param $overwrite
     * @param $uploadDir
     * @param $id
     * @return string
     * @throws \Exception
     */
    private function storeImageUpload($selector, $overwrite, $uploadDir, $id): string
    {
        $fileName = $selector.".png"; // ez life always png.

        if (!$overwrite) { // If we do not want to overwrite, we make a prefix
            $fileName = uniqid('rcrm_') . mt_rand(0, 10) . $fileName;
        }

        $path = $this->getRelativePath($uploadDir, $id, $fileName);

        $uploadData = [
            'path' => $path,
            'selector' => $selector,
            'name' => $selector,
            'original_name' => $selector,
            'uploadable_id' => $this->uploadable->id,
            'uploadable_type' => get_class($this->uploadable)
        ];

        $this->updateOrCreateUpload($selector, $overwrite, $uploadData);

        if(!is_dir($dir = str_replace($fileName,'',  public_path($path)))){
            mkdir($dir, 0777);
        }

        $data = explode(',', $this->uploadedFile);
        if(!file_put_contents(public_path($path), base64_decode($data[1])))
            throw new \Exception('Can\'t upload image:' . $path);

        return asset($path);
    }


    /**
     * @param $selector
     * @param $overwrite
     * @param $uploadDir
     * @param $id
     * @return string
     */
    private function storeRegularUpload($selector, $overwrite, $uploadDir, $id): string
    {
        $fileName = $this->uploadedFile->getClientOriginalName();

        if (!$overwrite) { // If we do not want to overwrite, we make a prefix
            $fileName = uniqid('rcrm_') . mt_rand(0, 10) . $fileName;
        }

        $path = $this->getRelativePath($uploadDir, $id, $fileName);

        $uploadData = [
            'path' => $path,
            'selector' => $selector,
            'name' => $this->uploadedFile->getClientOriginalName(),
            'original_name' => $this->uploadedFile->getClientOriginalName(),
            'uploadable_id' => $this->uploadable->id,
            'uploadable_type' => get_class($this->uploadable)
        ];

        $this->updateOrCreateUpload($selector, $overwrite, $uploadData);

        $this->uploadedFile->move(
            public_path($uploadDir . '/' . $id),
            $fileName
        );

        return asset($path);
    }

    /**
     * @param $selector
     * @param $overwrite
     * @param $uploadData
     */
    private function updateOrCreateUpload($selector, $overwrite, $uploadData)
    {
        $method = 'create';
        if ($overwrite) {
            $oldModel = $this->upload->newQuery()->where('uploadable_id', $this->uploadable->id)
                ->where('uploadable_type', get_class($this->uploadable))
                ->where('selector', $selector)
                ->first();


            if ($oldModel) {
                @unlink(public_path($oldModel->path));
                $this->upload = $oldModel;
                $method = 'update';
            }
        }

        $this->upload->$method($uploadData);
    }

    /**
     * @param $uploadDir
     * @param $id
     * @param $fileName
     * @return string
     */
    private function getRelativePath($uploadDir, $id, $fileName): string
    {
        $path = $uploadDir . '/' . $id . '/' . $fileName;

        return $path;
    }

}