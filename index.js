// ---------------------------------IMPORTING---------------------------------
//express
const express = require('express');
//packages
const bodyParser = require('body-parser')


//router
const router = require('./routes/routes')


// ---------------------------------CONFIGURATION---------------------------------
const app = express();
app.use(bodyParser.json());
app.use(express.json())



// ---------------------------------ROUTING---------------------------------
app.use('/api', router)

// ---------------------------------PORT DEFINE---------------------------------
app.listen(process.env.port ||3000);