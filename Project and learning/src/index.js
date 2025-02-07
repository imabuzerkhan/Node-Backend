// import mongoose from 'mongoose' 
// import { DB_NAME } from './constant.js'
// import express from 'express' 
import 'dotenv/config'

import DatabaseConnect from "./db/index.js";


DatabaseConnect();



































// const app = express();
// ( async ()=>{
//      try{
//       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//       app.on("error" , (err)=>{
//         console.log("error in try block " , err)
//         throw err;
//       }) 
//       app.listen(process.env.PORT , ()=>{
//         console.log(`database connected succesfully ${process.env.PORT}`)
//       })
//      } 
//      catch(err){
//      console.error("connection failed" , err)
//      }
// })()