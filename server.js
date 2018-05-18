const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./api/routes/routes');

const server = express();
const whitelist = ['http://localhost:3000', 'http://localhost:5000']
const corsOptions = {
  // If you're moving onto the stretch problem you'll need to set this obj with the appropriate fields
  // ensure that your client's URL/Port can achieve a Handshake
  // then pass this object to the cors() function
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

server.use(bodyParser.json());
server.use(cors(corsOptions));

routes(server);

module.exports = {
  server
};
