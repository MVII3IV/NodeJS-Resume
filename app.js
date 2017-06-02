var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('assets'));
app.set('views', './src/views');



var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');


var user = {
    "name": "Erick Dom",
    "title": "Developer",
    "description": "Software developer offering four years of experience in the full software development cycle, whose forte is backend utilizing both java and spring framework, with knowledge in frontend using bootstrap and angularjs as well as in graphic design, l have spend the last two years developing internal web application to control and send orders remotely to more than 80 machines located in memphis, constantly in touch with customers located in california.",
    "personalInfo": 
        {
            "email":"erickdom@outlook.com", 
            "phone": "614-132-2363", 
            "website": "erickdom.com"
        },
    "carrer":
        [
            
             {
                "jobTitle":"Programmer", 
                "period": "2015 - Present", 
                "company": "Autozone - Alldata",
                "location": "Chihuahua MX.",
                "jobDescrition" : ""
            },
            {
                "jobTitle":"Associate Programmer", 
                "period": "2013 - 2015", 
                "company": "Autozone - Alldata",
                "location": "Chihuahua MX.",
                "jobDescrition" : ""
            },
            {
                "jobTitle":"Intern", 
                "period": "2012 - 2013", 
                "company": "Autozone - Alldata",
                "location": "Chihuahua MX.",
                "jobDescrition" : ""
            }
           

        ],
        "professionalSkills" :
        [
            { "language": "Java", "experience": "4 Years", "percent": 80 },
            { "language": "C#", "experience": "4 Years", "percent": 70 },
            { "language": "Javascript", "experience": "2 Years","percent": 60 }
        ],
        "otherSkills" : ["HTML5", "CSS3", "Git", "Angular", "Spring"]
};


app.get("/", function(req, res){
    res.render('index', {'user': user});
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
