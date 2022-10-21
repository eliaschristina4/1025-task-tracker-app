// SERVER SIDE JS / NODE/EXPRESS / API

// i've only npm i'd for node, nodemon, express. do axios/dotenv and other if needed ig? idk what they do

/* 
Create: post
Read/retrieve: get
Uupdate: put
D: delete
*/

// Build the server
const http = require('http');
const fs = require('fs');
var express = require('express');
var app = express();
const port = process.env.PORT || 5000;

const server = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
});

// Use get request to get the files  // these are copied from ex, need to change to work with my shit

app.get("/", (req, res) => {
    fs.readFile('./index.html', (err, data) => {
        res.write(data);
        res.end();
    });
});

app.get("/api", (req, res) => {
    fs.readFile('./fun.html', (err, data) => {
        res.write(data);
        res.end();
    });
});

// Use post to send new tasks to json

// use put to update the tasks in jason

// use delete to..... delete.

// tell server to listen on the port

server.listen(port, (err) => {
    if (err) return err;
    console.log(`Server is listening on port ${port}...`)
});

// i created a fucking server!!!! YEEHAW lol
