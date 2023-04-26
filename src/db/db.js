import mongoose from "mongoose"
const uri = "mongodb+srv://Satirio:hUgM46D3XZ0Z07Kt@cluster0.ssskevq.mongodb.net/?retryWrites=true&w=majority"

async function connectDb(){
    await mongoose.connect(uri)
}

export default connectDb;