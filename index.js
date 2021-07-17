var express = require('express');
var app = express();
const { spawn } = require('child_process');

app.get('/', function(req, res) {
    res.status(200).send('Hello World!');
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {

    i = 0
    while (i < 61) {
        connectToNoxPlayer();
        i++
        ifFailed();
        break;

    }

    function connectToNoxPlayer() {
        setTimeout(function() {
            console.log('Connecting to nox player...');
            const python = spawn('python', ['automation.py']);
            if (python.connected) {
                console.log('Connected');

            }
        }, 10000 * i);
        //break;
    }

    function ifFailed() {
        setTimeout(function() {
            console.log('Failed To Connect Try Again');
        }, 10000 * i);
    }
    console.log('Express server listening on port ' + port);
});