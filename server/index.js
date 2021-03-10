'use strict';

const express = require("express");
const router = require('./router');
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models");
db.sequelize.sync();
// db.sequelize.sync({force: true});

// //In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

const app = express();

// var corsOptions = {
//   origin: "http://localhost:3001"
// };

// cors provides Express middleware to enable CORS with various options.
//app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(router);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello from the Express Server 🍷" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}🍷.`);
});


