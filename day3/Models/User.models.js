import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username : {
    type : String ,
    required : true ,
    unique : true
  } ,
  email : {
    type : String ,
    required : [true , "Email is required"] ,
    unique : true 
  } ,
  password : {
    type : String ,
    required : [true , "password must be required"] ,
    unique : true
  } , 
} , {timestamps : true})

export const User = mongoose.model("User" , UserSchema)