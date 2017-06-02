var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('assets'));
app.set('views', './src/views');



var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.get("/", function(req, res){
    res.render('index', {list: 'lest see'});
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
