const express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');

const port = 8000;
let uri = `mongodb://127.0.0.1:27017/weblottstodo`

const todoRoutes = require('./routes/Todo');

const app = express();

mongoose.connect(
    uri,function(err, db){
        if(err) throw err;
        console.log('Connect to db')
        db.close()
    }
);

// middleware for cors to allow cross origin resource sharing
app.use(cors());
// middleware to convert our request data into JSON format
app.use(bodyParser.json());

// include the todoRoutes
app.use('/api', todoRoutes);

//start the server in the port 
app.listen(port, ()=>{
    console.log(`Listening to http://localhost:${port}`)
});