const express = require('express');
const router = require('./routes/router');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || '5000';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server has been on port ${PORT}`);
  });
};

startServer();
