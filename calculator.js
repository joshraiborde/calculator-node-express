const express= require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

const port = 3000;
// **************************************************
app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html")
    // console.log(__dirname)
})

// BMI CALCULATOR **************************************************

app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

// CALCULATOR **************************************************

app.post("/", (req, res) =>{

    var num1 = Number(req.body.n1)
    var num2 = Number(req.body.n2)

    var results = num1 + num2;

    res.send("The result of the calculation is: " + results)
})

// BMI CALCULATOR **************************************************

app.post("/bmiCalculator", (req, res) => {
    var w = parseFloat(req.body.w)
    var h = parseFloat(req.body.h)

    var bmi = Math.round(w/(h*h))
    // bmi = w*h;

    res.send("Your BMI is: " + bmi)
} )

app.listen(port, () =>{
    console.log("calculator challenge")
})