const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

//reading json / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//API Routes
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

//Initial Rote | End-Point
app.get("/", (req, res) => {
  //Showing the request
  res.json({ message: "Hello Node" });
});

//listen the port
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@apicluster.dex5v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
