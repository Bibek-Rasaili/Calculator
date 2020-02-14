const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true})); //posted from html form, use urlencoded

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
  //__dirname is a const that gives the file path(location) of the current folder/file

});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  console.log(num1+num2);
  res.send("Your answer is: "+(num1+num2));
});

//when user enters localhost:3000/bmiCalculator, it is redirected to /bmiCalculator.html
app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

//This is activated when form is submitted
app.post("/bmiCalculator", function(req, res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  console.log(height + " "+weight);
  var bmi = Math.trunc((weight/(height*height))*10)/10;

  res.send("Your bmi is: "+bmi);
});

//opens a local host server on port 3000
app.listen(3000, function(){
  console.log("Server is listening at port 3000");
});
