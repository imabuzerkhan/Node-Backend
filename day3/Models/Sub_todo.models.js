import mongoose from "mongoose";

const Subtodo = new mongoose.Schema({
  content : {
    type : String,
    required : true 
  } ,
  complete : {
    type : Boolean ,
    required : true 
  } ,
  createdby : {
    type : mongoose.Schema.Types.ObjectId ,
    ref  : "User"
  }
}, {timestamps:true})

export const SubTodo = mongoose.model("SubTodo" , Subtodo)