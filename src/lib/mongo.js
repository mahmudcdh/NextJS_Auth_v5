import mongoose from "mongoose";


export async function dbConnect(){
    try{
        const conn = await mongoose.connect(String(process.env.MONGO_DB_CONNETION_STTRING));
        return conn;

    }
    catch(err){
        throw new Error(er);
    }
}