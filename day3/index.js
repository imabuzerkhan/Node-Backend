 import express from 'express' 

 const app = express() ;
 const port = process.env.PORT || 3000

 app.get("/api/jokes" , (req , res)=>{
    const Jokes = [
      {
        id : 1 ,
        Title : "it is a funny jokes"
      } ,
      {
        id : 2 ,
        Title : "it is a  jokes"
      } ,
      {
        id : 3 ,
        Title : "it is a funny "
      } ,
    ]
    res.send(Jokes)
 }) ;

 app.listen(port , ()=>{
  console.log("the port is strat on " + port)
 } )
