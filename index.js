var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));

http.listen(app.get('port'), function () {
    console.log('listening on port', app.get('port'));
});

// io.on('connection', function (socket) {
//     socket.on('make_turn', function (buttonId) {
//         console.log(buttonId);
//         io.emit('make_turn', buttonId);
//     });
// });

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'test01'
// });

// connection.connect();

// connection.query('SELECT time AS solution FROM test', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[1].solution);
// });

// connection.end();