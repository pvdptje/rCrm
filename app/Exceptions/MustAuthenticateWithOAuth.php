<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Session;
use Throwable;

/**
 * Class MustAuthenticateWithOAuth
 * @package App\Exceptions
 */
class MustAuthenticateWithOAuth extends Exception
{
    /**
     * @var string
     */
    public $redirectUrl;

    public $followUpUrl;

    /**
     * MustAuthenticateWithOAuth constructor.
     * @param string $message
     * @param int $code
     * @param Throwable|null $previous
     * @param string $redirectUrl
     * @param string $followUpUrl
     */
    public function __construct(string $message = "", int $code = 0, Throwable $previous = null, string $redirectUrl, string $followUpUrl = '')
    {
        parent::__construct($message, $code, $previous);

        $this->redirectUrl = $redirectUrl;
        $this->followUpUrl = $followUpUrl;
    }

    /**
     * @return RedirectResponse
     */
    public function render()
    {
        if($this->followUpUrl !== ''){
            Session::put('followUpUrl', $this->followUpUrl);
        }

        return redirect()->route('oauth.google.redirect')->with('googleAuthUrl', $this->redirectUrl);
    }

}
