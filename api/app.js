// init base dir
global.__basedir = __dirname;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// STEP 1 - Route - IMPORT THE ROUTE
var usersRouter = require('./routes/users-routeur');
var articlesRouter = require('./routes/articles-routeur');

// IMPORT MONGOOSE
let mongoose = require('mongoose');

var app = express();

// IMPORT CORS
let cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Paramétrage des connexions entrantes
const corsOptions = {
  origin: 'http://localhost:4200'
};
app.use(cors(corsOptions));

// CONNECT TO MongoDB - BEFORE USING ROUTES - DATABASE : jrblog
mongoose.connect('mongodb://localhost/jrblog');
let database = mongoose.connection;
database.on('error', (err) => console.log('[mongoose]  Connexion à MongoDB : echouée'));
database.once('open', () => console.log('[mongoose]  Connexion à MongoDB : réussie'));

app.use('/', indexRouter);
// Route etape 2 - utiliser la route
app.use('/api/users', usersRouter);
app.use('/api/articles', articlesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
