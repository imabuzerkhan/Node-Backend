import mongoose from 'mongoose' 

const UserSchema = mongoose.Schema({
  Username : {
    type : String ,
    required : true ,
    unique : true
  } ,
  email : {
    type : String ,
    required : true ,
    unique : true ,
  } ,

  password : {
    type : number ,
    required : true 
  } ,

},{})  

const User = mongoose.model("User" , UserSchema)