let express = require('express');
let compress = require('compression');
let expressLayouts = require('express-ejs-layouts');
let path = require('path');
let favicon = require('static-favicon');
let morgan = require('morgan')
let livereload = require('connect-livereload');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let routes = require('./routes/index');
let users = require('./routes/users');

let fs = require('fs');

let debug = require('debug')('Blank_GULP_Mean');

let app = express();

let dir = './logs';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(compress());
app.use(expressLayouts);
app.use(favicon());
//app.use(morgan('combined'));
//app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(livereload({port: 35729}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users',users);

app.set('port', process.env.PORT || 3000);

let server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});

module.exports = app;
