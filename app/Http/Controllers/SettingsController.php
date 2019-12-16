<?php

namespace App\Http\Controllers;

use App\Repositories\OAuthRepository;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index(Request $request, OAuthRepository $repository)
    {
        $user = $request->user();
        $oAuth = $user->oAuth()->where('service', 'google')->first();

        $isConnectedToGoogle = (bool) $oAuth;
        $calendarId = '';
        $calendarList = [];
        if($oAuth){
            // We should be able to connect, since we have details.
            $client = $repository->getGoogleClient($user);
            $calendarService = new \Google_Service_Calendar($client);
            $calendarId = $user->setting('google_calendar_id');
            $calendars = $calendarService->calendarList->listCalendarList()->getItems();
            $calendarList = [];
            foreach($calendars as $calendar){
                if($calendar->accessRole !== 'reader'){
                    $calendarList[$calendar->id] = $calendar->id . ($calendar->primary ? __(' (Primary)') : '');
                }
            }
        }


        return inertia('Settings/Index', compact('isConnectedToGoogle', 'calendarId', 'calendarList'));
    }
}
