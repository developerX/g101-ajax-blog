// Check if post exists in JSON file
// If exists in JSON file, return success message If it doesn't then return error message
// If it does exist then return update file and return success message.
// Check if new data is provided PUT/posts/:id create new endpoint

const express = require('express');
const app = express();
const port = 3000;



//method with 1 argument hat passes 3 arguments to the callback
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    //the * allows anyone to connect to this API 
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Pass to next layer of middleware
    next();
});


app.patch('/notes/:id', (req, res)=>{
    res.send('PATCH: ')
})