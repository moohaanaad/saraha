import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
user:{
    type:mongoose.Types.ObjectId,
    ref:"User"
},
message:String
},{ timeStamp: true })
export const Message = mongoose.model("Message", messageSchema)