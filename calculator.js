const express = require("express");
const bodyParser = require("body-parser");
const { get } = require("express/lib/response");
const res = require("express/lib/response");
const keys = require("./weatherpai.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// const port = 3000;


// CALCULATOR **************************************************
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // console.log(__dirname)
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var results = num1 + num2;

  res.send("The result of the calculation is: " + results);
});

// BMI CALCULATOR **************************************************

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  var w = parseFloat(req.body.w);
  var h = parseFloat(req.body.h);

  var bmi = Math.round(w / (h * h));

  res.send("Your BMI is: " + bmi);
});

// weatherpai **************************************************

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  var w = parseFloat(req.body.w);
  var h = parseFloat(req.body.h);

  var bmi = Math.round(w / (h * h));

  res.send("Your BMI is: " + bmi);
});


// APP LISTEN **************************************************

app.listen(weatherpai.ports.port, () => {
  console.log("calculator challenge");
});
