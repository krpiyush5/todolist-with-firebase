var data=[{item:'Coding'},{item:'Playing Csgo'}];

module.exports=function (server) {



    server.get('/todo',function (req,res) {

       res.render('todo',{todos:data});
    });

    server.post('/todo',function (req,res) {


    });

    server.delete('/todo',function (req,res) {

    });


};