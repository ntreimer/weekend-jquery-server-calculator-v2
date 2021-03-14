// require express so the app can use its features
const express = require('express');

// create app
const app = express();

// grab modules
const performCalculation = require('./modules/performCalculation');

// set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// set default folder for app to show it where the index is
app.use( express.static('server/public') );

// global constants and variables
const port = 5000;
let calculationHistory = [];

// spin up server
app.listen(port, ()=>{
    console.log('Server up on port:', port);
})

// set routes

app.get('/calculate', (req, res)=>{
    console.log('in /calculate GET');
    // send history array
    res.send(calculationHistory);
})// end /calculate GET

app.post('/calculate', (req, res)=>{
    console.log('in /calculate POST:', req.body);
    performCalculation(req.body);
    // push into history array
    calculationHistory.push(req.body);
    // send a created code
    res.sendStatus(201);
})// end /calculate POST