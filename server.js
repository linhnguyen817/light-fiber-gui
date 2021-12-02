import express from 'express';
import cors from 'cors';
// get MongoDB driver connection
import { connectToServer } from './server/conn.js';
import bodyparser from 'body-parser';
const { urlencoded, json } = bodyparser;
import recordRoutes from './server/routes.js';
import path from 'path';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(recordRoutes);

// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));
// parse application/json
// app.use(json());

// perform a database connection when the server starts
console.log("connecting to server");
connectToServer(function (err) {
  console.log("inside function");
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

const __dirname = path.resolve(path.dirname('')); 

let root = path.join(__dirname, 'client', 'build');
app.use(express.static(root))
app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

