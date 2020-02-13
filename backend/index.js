const express = require('express');
const cors = require('cors');
const messages = require('./app/message');
const config = require('./config');
const fileDb = require('./fileDb');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use('/messages', messages);

const run = async () => {
  await fileDb.init();
  app.listen(config.port)
};

run().catch(e => {
    console.error(e)
});