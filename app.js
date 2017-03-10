var express=require('express');
var app=express();
var path = require("path");
var mysql = require('mysql');
var usuario='andreas';

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/css/prime_ui'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/js/prime_ui'));
app.use(express.static(__dirname + '/img'));

app.set('view engine', 'ejs'); 

//1. Efetuar login;
//2. Fazer as telas CRUD;
//3. Conferir se o usuário está logado;

app.get("/consolidar",function(req,res){
     
    //res.render('dia',valores);
    res.status(202).send("executar chamada para procedimento de manipulação dos filtros");
});


app.get("/dia",function(req,res){    
            
   var connection = mysql.createConnection({
                            host     : '104.196.222.196',
                            user     : 'newtech',
                            password : 'newtech',
                            database : 'indicadores'});

    connection.connect(function(err){
        if(err) throw err;
        
        connection.query('call buscaDados(?,?)',[1,usuario],function(err,rows){
            if(err) throw err;
        
                var top5vendedores=JSON.stringify(rows[0]);            
                var top5produtos=JSON.stringify(rows[1]);
                var top5grupos=JSON.stringify(rows[2]);
                var indicadores=JSON.stringify(rows[3]);
                var lojas=JSON.stringify(rows[4]);
            
            var valores={"tipo" : "Dia",
                 "top5vendedores" : top5vendedores,
                 "top5produtos" : top5produtos,
                 "top5grupos" : top5grupos,
                 "indicadores" : JSON.parse(indicadores),
                 "lojas" : JSON.parse(lojas)};  
    
                res.render('dia',valores);
        });
        
        connection.end();        
    });          
});

app.get("/mes",function(req,res){
            
    var connection = mysql.createConnection({
                            host     : '104.196.222.196',
                            user     : 'newtech',
                            password : 'newtech',
                            database : 'indicadores'});

    connection.connect(function(err){
        if(err) throw err;
        
        connection.query('call buscaDados(?,?)',[2,usuario],function(err,rows){
           if(err) throw err;
            
                var top5vendedores=JSON.stringify(rows[0]);            
                var top5produtos=JSON.stringify(rows[1]);
                var top5grupos=JSON.stringify(rows[2]);
                var indicadores=JSON.stringify(rows[3]);
                var lojas=JSON.stringify(rows[4]);
                        
                var valores={"tipo" : "Mês",
                 "top5vendedores" : top5vendedores,
                 "top5produtos" : top5produtos,
                 "top5grupos" : top5grupos,
                 "indicadores" : JSON.parse(indicadores),
                 "lojas" : JSON.parse(lojas)};  
            
                res.render('dia',valores);
        });
        
        connection.end();        
    });       
});

app.get("/ano",function(req,res){
   var connection = mysql.createConnection({
                            host     : '104.196.222.196',
                            user     : 'newtech',
                            password : 'newtech',
                            database : 'indicadores'});

    connection.connect(function(err){
        if(err) throw err;
        
        connection.query('call buscaDados(?,?)',[3,usuario],function(err,rows){
           if(err) throw err;
            
                var top5vendedores=JSON.stringify(rows[0]);            
                var top5produtos=JSON.stringify(rows[1]);
                var top5grupos=JSON.stringify(rows[2]);
                var indicadores=JSON.stringify(rows[3]);
                var lojas=JSON.stringify(rows[4]);
            
                var valores={"tipo" : "Ano",
                 "top5vendedores" : top5vendedores,
                 "top5produtos" : top5produtos,
                 "top5grupos" : top5grupos,
                 "indicadores" : JSON.parse(indicadores),
                 "lojas" : JSON.parse(lojas)};  
    
                res.render('dia',valores);
        });
        
        connection.end();        
    });       
});


app.get("/login",function(req,res){
    res.render('login');
});


app.get("/",function(req,res){
    res.status(404).send("Página não encontrada!");    
});


//app.listen(3000);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
