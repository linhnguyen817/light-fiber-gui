const express = require('express'); 
const app = express(); 
const cors = require('cors');
const { Console } = require('console');

app.use(cors())
const port = process.env.PORT || 5000; 
const gradientColors = ["#BE0505", "#D40000", "#FF0000", "#FF4040", "#FF6D6D", "#FF8B8B", "#FFB0B0", "#FAC9C9", "#FFDDDD", "#FFEBEB"];

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/led_design', (req, res) => { 
    console.log("API HIT");
    res.send({ ledColors: gradientColors }); 
}); 

app.post('/update_design', function(req, res) {
    // console.log(req);
    console.log(req.body.ledColors,);
    const design = {
        ledColors: req.body.ledColors,
    };
    res.send(design)
  });