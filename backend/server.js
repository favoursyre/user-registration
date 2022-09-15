//This handles the server side for the Selenia

//Libraries -->
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const pageRoutes = require("./routes/pageRoute");
const dashboardRoutes = require("./routes/dashboardRoute");

//Commencing the app
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//The middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log("Middleware: ", req.path, req.method);
  next();
});

//Routes
app.use("/", pageRoutes);
app.use("/", dashboardRoutes);

//Connecting the app to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    //Listen for requests
    app.listen(PORT, () => {
      console.log("Server connected to DB and listening on port", PORT);
    });
  })
  .catch((error) => {
    console.log("DB Error: ", error);
  });
