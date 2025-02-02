import express from 'express' ;
// require ('dotenv').config()
import 'dotenv/config'
const app = express();
const port = process.env.PORT || 3000

app.get('/api/jokes' , (req , res)=>{
  const jokes = [
    {
      id : 1 ,
      title : "nice jokes"
    },
    {
        id : 2 ,
      title : "nice jokes 2"
    },
    {
      id : 3 ,
    title : "nice jokes 3"
  },
  {
    id : 4 ,
  title : "nice jokes 4"
},
  ]
  res.send(jokes)
})


app.listen(port , ()=>{
  console.log(`this server is start on ${port}`)
})