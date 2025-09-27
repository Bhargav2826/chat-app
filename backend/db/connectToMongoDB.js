import mongoose from "mongoose";


const connectToMongoDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://brgv6837:R6i11eE5ywhAwSEB@cluster0.nkmcnkt.mongodb.net/CHAT-APPLICATION?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected to mongodb");
    }catch(error){
        console.log("error connecting to the mongodb", error.message);
    }
};

export default connectToMongoDB;