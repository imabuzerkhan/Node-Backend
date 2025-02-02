import { useEffect, useState } from "react"
import axios from 'axios';
import './App.css'

function App() {
  const [jokes , setjokes] = useState([])
  useEffect(()=>{
    axios.get("/api/jokes")
      .then((response)=>{
        console.log(response.data)
        setjokes(response.data)
      }).catch((error)=>{
        console.log(`sending data is failed ${error} `)
      })
  })
  
  return (
    <>
     <h1>connect backend and frontend</h1>
     <p> Jokes: {jokes.length}</p>
     {
     jokes.map((Jokes)=>{
      return(
      <div key={Jokes.id} >
       <h1>{Jokes.title}</h1>
      </div>
      )
     })
     }
    </>
  )
}

export default App
