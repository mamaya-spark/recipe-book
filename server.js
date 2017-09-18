const express      = require('express')
const morgan       = require('morgan');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const session      = require('express-session');
const pg           = require('pg');
const pgSession    = require('connect-pg-simple')(session);
const dao          = require('./db/dao');
const appConfig    = require('./app.config.json');
const dbUtil       = require('./util/db');
const router       = require('./routes');

//* Setup the express app
const app = express();
app.use(morgan('dev'));                               // log HTTP requests
app.use(bodyParser.json());                           // parse JSON in a request body
app.use(bodyParser.urlencoded({ extended: false }));  // parse body regardless of content type
app.use(cookieParser(appConfig.SECRET_TOKEN));        // parse cookies

//* Setup the user session
app.use(session({
  secret: appConfig.SECRET_TOKEN,
  name: appConfig.SESSION.NAME,
  cookie: {
    httpOnly: true,
    maxAge: appConfig.SESSION.AGE_MS,
  },
  store: new pgSession({
    pg,
    conString: dbUtil.connString,
    tableName: 'user_sessions'
  }),
  httpOnly: true,
  rolling: true,
  resave: true,
  saveUninitialized: false,
}));

//* Setup the server
const server = require('http').createServer(app);

//* Setup the routes
app.use('/', router(dao));
app.get('*', (req, res) =>
  res.send('hello world'));

//* Run the server
server.listen(appConfig.SERVER.PORT, () =>
  console.log('Magic happens on port', appConfig.SERVER.PORT)
);
