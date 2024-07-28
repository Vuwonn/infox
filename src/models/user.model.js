import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32,
        minlength: 3,
        unique: true,
        lowercase: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: String
});


export default mongoose.model("User", userSchema);

