import mongoose from "mongoose";

const connectToDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Successfully connected to Database!!");

    }
    catch (error) {
        console.log("error while connecting to database", error.message);
    }
};

export default connectToDb;