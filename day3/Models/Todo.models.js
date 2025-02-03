import mongoose from 'mongoose' 

const TodoSchema = new mongoose.Schema({

    content : {
      type : String ,
      required : true 
    } ,

    complete : {
      type : Boolean ,
      default : false
    } ,
    createdby : {
      type : mongoose.Schema.Types.ObjectId ,
      ref : "User"
    } , 
    Subtodo : [
      {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "SubTodo"
      }
    ]  // Array of sub todo

 
}, {timestamps:true})

export const Todo = mongoose.model("Todo" , TodoSchema)