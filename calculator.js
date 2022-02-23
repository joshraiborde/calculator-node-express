const express= require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

const port = 3000;

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html")
    // console.log(__dirname)
})

app.post("/", (req, res) =>{

    var num1 = Number(req.body.n1)
    var num2 = Number(req.body.n2)

    var results = num1 + num2;

    res.send("The result of the calculation is: " + results)
})

app.listen(port, () =>{
    console.log("calculator challenge")
})