import mongoose from "mongoose"
//link to connect to mongodb atlas
const uri = "mongodb+srv://Satirio:11HevndcX9TEnXZb@cluster0.ysci7p6.mongodb.net/?retryWrites=true&w=majority"


//try connetion
async function connectDb(){
    await mongoose.connect(uri)
}

export default connectDb;
