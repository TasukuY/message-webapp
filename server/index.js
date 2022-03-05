const express = require('express');
const cors = require('cors');
const {getMessages} = require('./controller');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/messages', getMessages);

const SERVER_PORT = 4040;
app.listen(SERVER_PORT, () => console.log(`server runnning at ${SERVER_PORT}`));

