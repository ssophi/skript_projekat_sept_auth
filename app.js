const express = require('express');
const bodyParser = require('body-parser')

const jwt =require('jsonwebtoken')
const cors =require('cors');
const bcrypt = require('bcrypt');

const path= require('path');

// const { response } = require('express');
const http = require('http');
const { Server } = require("socket.io");
// const history = require('connect-history-api-fallback');

const ruta_login = require('./routes/login_routes.js');
const ruta_register = require('./routes/register_routes.js');

require('dotenv').config();

const app_auth = express();

const PORT_auth = 9000;

const server_auth = http.createServer(app_auth);

app_auth.use(express.json());

app_auth.use(bodyParser.json());

var corsOptions = {
    credentials: true,
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}
app_auth.use(cors(corsOptions))

app_auth.use('/login',ruta_login);
app_auth.use('/register',ruta_register);



// app.use('/admin', adminRoutes)

function getCookies(req) {
    if (req.headers.cookie == null) return {};

    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });

    return parsedCookies;
}

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];
  
    if (token == null) return res.redirect(301, '/login');
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
        if (err) return res.redirect(301, '/login');
    
        req.user = user;
    
        next();
    });
}

  const io_auth = require("socket.io")(server_auth, {
    // path: '/socket.io',
    cors: {
        origin: "*",
        credentials: true
    },

    origins: ["*"],
    methods: ['GET', 'POST'],
            credentials: true,        
            allowEIO3: true
  });



io_auth.on('connection', socket => {
      
    socket.on('error', err => socket.emit('error', err.message) );
});

server_auth.listen(process.env.PORT || PORT_auth, () =>console.log(`Server_auth running on port ${PORT_auth}`));