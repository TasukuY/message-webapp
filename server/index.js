const express = require('express');
const cors = require('cors');
const {getMessages, deleteMessage} = require('./controller');
const baseURL = '/api/';

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//sending back promises
app.get(baseURL + 'messages', getMessages);
app.delete(baseURL + 'delete/:id', deleteMessage);

//running the server file 
const SERVER_PORT = 4040;
app.listen(SERVER_PORT, () => console.log(`server runnning at ${SERVER_PORT}`));

