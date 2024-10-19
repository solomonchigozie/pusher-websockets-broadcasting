<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

// Broadcast::channel('chat', function($user){
//     return true;
// });

/**chanel with parameter */
Broadcast::channel('chat.{id}', function($user, $id){
    return $user->id == $id;
});

/**presence channel */
Broadcast::channel('online', function($user){
    return $user->toArray();
});