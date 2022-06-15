const path = require('path');
const express = require("express");
const cors = require("cors");
const app = express();



var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// serve our css as static
app.use(express.static(__dirname));
// simple route
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname +'index.html'));
  res.json({ message: "Tester one." });
  
});


require("./app/routes/routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;               // my linux use 8080 and win7 use 3500
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
