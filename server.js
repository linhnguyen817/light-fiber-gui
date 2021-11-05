const express = require('express'); 
const app = express(); 
const cors = require('cors');
const { Console } = require('console');

app.use(cors())
const port = process.env.PORT || 5000; 


// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => { 
    console.log("API HIT");
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
}); 

app.post('/update_design', function(req, res) {
    // console.log(req);
    console.log(req.body);
    const design = {
        ledColors: req.body.ledColors,
    };
    console.log("Design: ", design);
  });