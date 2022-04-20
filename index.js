const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3035 ;

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/gp.html');
     });

 io.on('connection', (socket) => {
     socket.on('chat message', msg => {
 io.emit('chat message', msg);
          console.log('user connected');
     socket.on('disconnect', () => {
         console.log('user disconnected');
     });
        });
 });   
 http.listen(port,() =>{
     console.log('Server works');
 });