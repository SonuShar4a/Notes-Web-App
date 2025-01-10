import mongoose from "mongoose";

const DBcon=async()=>{
    try{
       mongoose.connect('mongodb://localhost:27017/NotesApp')
       console.log("MONGOOSE IS CONNECTED")
    } catch(error){
       console.log("error in mongoose connection",error);
    }
}
export default DBcon;