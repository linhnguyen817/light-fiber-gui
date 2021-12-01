const express = require('express'); 
const cors = require('cors');

const app = express(); 
app.use(cors())
app.use(express.static("src"))
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
    console.log("GET Request");
    
    res.send({ ledColors: 
        ["#FF0000", "#FF0000", "#FF0000", "#FF8A00", "#FF8A00", "#FF8A00", "#FFF500", "#FFF500", "#FFF500", "#9EE05C", "#9EE05C", "#9EE05C", "#1ED700", "#1ED700", "#1ED700", "#65E5D6", "#65E5D6", "#65E5D6", "#2097DB", "#2097DB", "#2097DB", "#3242D0", "#3242D0", "#3242D0", "#B240CF", "#B240CF", "#B240CF", "#D64EA8", "#D64EA8", "#D64EA8"]
    }); 
}); 

app.post('/update_design', function(req, res) {
    console.log("POST Request");
    console.log(req.body.ledColors);
    const design = {
        ledColors: req.body.ledColors,
    };
    res.send(design)
});