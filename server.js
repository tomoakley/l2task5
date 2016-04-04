var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// set /assets as the directory where assets live
app.use('/assets', express.static(__dirname + '/assets'));

// set the routes
app.get('/', function(req, res) {
    res.render('pages/index');
});
app.get('/server-side', function(req, res) {
    res.render('pages/server-side');
});
app.get('/data', function(req, res) {
    res.render('pages/data');
});
app.get('/technical-report', function(req, res) {
    res.render('pages/technical-report');
});
app.get('/appendix', function(req, res) {
    res.render('pages/appendix');
});

app.listen(port, function() {
    console.log('App is running on http://localhost:' + port);
});
