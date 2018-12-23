// Using require is now always relative to the server root
// Just use require.main.require("./relative-to-root")
require.main.require = require

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const server = express();

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

require('./routes')(server);
server.use(express.static(path.join(__dirname, '/../client/build')));
server.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
});

server.run = (cb) => {
  const port = process.env.PORT || '3000';
  server.listen(port, (err) => {
    return cb ? cb(err ? err : null, port) : null;
  });
};

module.exports = server;
