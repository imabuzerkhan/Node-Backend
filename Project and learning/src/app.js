import express from 'express'
import cookieParser
 from 'cookie-parser'
 import cors from 'cors'
const app = express()


app.use(cors({
  origin : process.env.CORS_ORIGIN ,
  credentials : true ,
})) 
// josn data accept karne ke liye 
app.use(express.json({limit:"16kb"}))
// url ke liye configuration kar rahe hai
app.use(express.urlencoded({extended:true , limit: "16kb"})) 
// agar koi pdf wagera ya image save karwana oh to apne server pe hi kar sakte hai
app.use(express.static("public")) 


 



export {app}