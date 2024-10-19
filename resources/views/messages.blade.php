<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="user_id" content="{{ Auth::user()?->id }}">
    <title>Broadcast</title>
    @vite('resources/js/app.js')
</head>
<body>
    <h1>Messages</h1>
    <div id="messages"></div>
    
</body>
</html>