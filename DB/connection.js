import mongoose from "mongoose";   
export const connectDB = () => {
    mongoose.connect(process.env.DB_URL).then(()=>console.log("db connection successfully")
    ).catch(()=>console.log("fail to connect"))
} 
