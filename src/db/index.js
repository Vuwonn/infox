import mongoose from "mongoose";

const uri = `${process.env.MONGODB_URI}/${process.env.MONGODB_DB}`;

 const connectDB = (async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
})

export default connectDB