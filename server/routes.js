
import express from 'express'; 

// This will help us connect to the database
import {LEDData} from './conn.js';

const recordRoutes = express.Router();

// create a GET route (test)
recordRoutes.route('/led_design').get(async function (req, res) { 
    console.log("GET Request");
    LEDData.find({}).sort({_id:-1}).limit(1)
    .then((data)=>res.send(data)); 
}); 

recordRoutes.route('/update_design').post(function(req, res) {
    console.log("POST Request");
    console.log(req.body.ledColors, "req.body.ledColors");

    const design = {
        ledColors: req.body.ledColors,
        effect: req.body.effect,
        createdAt: Date.now()
    };

    let data = new LEDData(design);
    data.save()
        .then((design) => res.send(design))
});

export default recordRoutes;