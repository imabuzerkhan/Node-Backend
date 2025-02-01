const express = require("express") ;
require('dotenv').config()
const app = express();
const port = 3000;

const student = {
  "name" : "abuzer" ,
  "age" : "24" ,
 

  
}

app.get('/', (req , res)=>{
res.send("hello world")
})
// how to handle json data 
app.get('/Json', (req , res)=>{
  res.json(student)
})

app.get('/home' , (req , res)=>{
res.send("<h1>Hello i am a home and i am from biratnagar nepal</h1>")
})


app.get('/contact', (req , res)=>{
  res.send('<span>+9779804395755</span>')
})

app.listen(process.env.PORT , ()=>{
  console.log( `connect to backend ${process.env.PORT}`)
})

// done for day1