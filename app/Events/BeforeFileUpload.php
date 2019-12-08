<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;

/**
 * Class BeforeFileUpload
 * @package App\Events
 */
class BeforeFileUpload
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var
     */
    public $request;

    /**
     * @var
     */
    public $uploadableType;

    /**
     * @var
     */
    public $selector;

    /**
     * BeforeFileUpload constructor.
     * @param $request
     * @param $uploadableType
     * @param $selector
     */
    public function __construct(Request $request, $uploadableType, $selector)
    {
        $this->request = $request;
        $this->uploadableType = $uploadableType;
        $this->selector = $selector;
    }
}
