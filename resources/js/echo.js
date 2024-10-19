import Echo from 'laravel-echo';
 
import Pusher from 'pusher-js';
window.Pusher = Pusher;
 
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true
});

// for public channels

// window.Echo.channel('chat').listen('NewMessageEvent', (e) => {
//     console.log(e)
//     document.getElementById('messages').innerHTML += `<p>${e.message}</p>`
// })

//for private channels
// window.Echo.private('chat').listen('NewMessageEvent', (e) => {
//     console.log(e)
//     document.getElementById('messages').innerHTML += `<p>${e.message}</p>`
// })


/**with parameters */
var userId = document.querySelector('meta[name="user_id"]').getAttribute('content')
// console.log(userId)
window.Echo.private('chat.'+ userId).listen('NewMessageEvent', (e) => {
    console.log(e)
    document.getElementById('messages').innerHTML += `<p>${e.message}</p>`
})
