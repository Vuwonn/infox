import mongoose from "mongoose";



 const connectDB = (async () => {
    try {
        const uri = `${process.env.MONGO_URI}/${process.env.MONGODB_DB}`;
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})

export default connectDB