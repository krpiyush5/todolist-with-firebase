var express =require('express');

var todoController=require('./controllers/todoController');

var server=express();

server.set('view engine','ejs');

server.use(express.static('./public'));


todoController(server);

//listen to port

server.listen(3000);
console.log('server is running');
