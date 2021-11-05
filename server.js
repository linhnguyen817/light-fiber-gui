const express = require('express'); 
const app = express(); 
const cors = require('cors');
const { Console } = require('console');

app.use(cors())
const port = process.env.PORT || 5000; 
const gradientColors = ["#BE0505", "#D40000", "#FF0000", "#FF4040", "#FF6D6D", "#FF8B8B", "#FFB0B0", "#FAC9C9", "#FFDDDD", "#FFEBEB"];

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
    console.log(req.body);
    const design = {
        ledColors: req.body.ledColors,
    };
    console.log("Design: ", design);
  });