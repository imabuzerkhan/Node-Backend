import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import 'dotenv/config' 
import { app } from "../app.js";

const DatabaseConnect = async()=>{
try{
    const connectInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on('err' , (err)=>{
      console.log("error in try block " , err)
     })
    console.log(`/n mongodb coonected ${connectInstance.connection.host} `)
 
} catch(err){
  console.log("connection failed" , err)
  process.exit(1)
}
}

export default DatabaseConnect