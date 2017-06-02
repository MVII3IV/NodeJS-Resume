var express = require('express');
var app = express();

var port = 8080;
app.listen(port, function(){
    console.log("Listening at port: " + port);
});


app.use(express.static('assets'));
app.set('views', './src/views');

var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.get("/", function(req, res){
    res.render('index', {list: 'works'});
});

