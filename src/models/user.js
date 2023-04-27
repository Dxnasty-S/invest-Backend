import mongoose from "mongoose";
const { Schema } = mongoose;

//create the schema for user register
const userSchema = new Schema({
    name:{
        type: String,
        required: true
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

    sex:{
        type: String,
        required: true
    },

    amount:{
        type: Number,
        required: true
    },

    patrimony:{
    type: Number,
    required: true
    },

    invAmount:{
        type: Number,
        required: true
    },

     createdAt:{
        type: Date,
        default: Date.now
    }
});


//export user schema
export default mongoose.model("User", userSchema);
