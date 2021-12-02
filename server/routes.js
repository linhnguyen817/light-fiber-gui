
import express from 'express'; 

// This will help us connect to the database
import {LEDData} from './conn.js';

const recordRoutes = express.Router();

console.log("tried to connect dbo ");

import path from 'path';
const __dirname = path.resolve(path.dirname('')); 

recordRoutes.route('/').get(async function (req, res) {
    console.log("try to load client/build static files", __dirname);
    res.sendFile(path.join(__dirname,"client/build"))
});

// create a GET route (test)
recordRoutes.route('/led_design').get(async function (req, res) { 
    console.log("GET Request");
    LEDData.find({}).sort({created_at: 1}).limit(1)
    .then((data)=>res.send(data)); 
}); 

recordRoutes.route('/update_design').post(function(req, res) {
    console.log("POST Request");
    console.log(req.body.ledColors, "req.body.ledColors");

    const design = {
        ledColors: req.body.ledColors,
        createdAt: Date.now()
    };

    let data = new LEDData(design);
    data.save()
        .then((design) => res.send(design))
});

recordRoutes.route('*').get(async function (req, res){
    console.log("trying to load index.html from client/build");
    res.sendFile(path.join(__dirname,'client/build','index.html'));
  });


export default recordRoutes;