import { rainbowColors } from './../constants';

const express = require('express'); 
const app = express(); 
const cors = require('cors');

app.use(cors())
const port = process.env.PORT || 5000; 
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route (test)
app.get('/led_design', (req, res) => { 
    console.log("API HIT");
    res.send({ ledColors: rainbowColors }); 
}); 

app.post('/update_design', function(req, res) {
    console.log(req.body.ledColors,);
    const design = {
        ledColors: req.body.ledColors,
    };
    res.send(design)
  });