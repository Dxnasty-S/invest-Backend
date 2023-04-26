import mongoose from "mongoose"
//link to connect to mongodb atlas
const uri = "mongodb+srv://Satirio:hUgM46D3XZ0Z07Kt@cluster0.ssskevq.mongodb.net/?retryWrites=true&w=majority"


//try connetion
async function connectDb(){
    await mongoose.connect(uri)
}

export default connectDb;