import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String
    },
    password:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: false
    },
    age:{
        type: Number,
        required: false
    },

    createdAt:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("User", userSchema);