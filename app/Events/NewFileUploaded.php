<?php

namespace App\Events;

use App\Upload;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

/**
 * Class NewFileUploaded
 * @package App\Events
 */
class NewFileUploaded
{
    use Dispatchable, SerializesModels;

    /**
     * @var Upload
     */
    public $upload;

    /**
     * @var string
     */
    public $selector;

    /**
     * NewFileUploaded constructor.
     * @param Upload $upload
     * @param string $selector
     */
    public function __construct(Upload $upload, string $selector)
    {
        $this->upload = $upload;
        $this->selector = $selector;
    }
}
