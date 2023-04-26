//import user Schema from models
import User from "../models/user.js";


//request users data from mongodb
async function getUsers(request, reponse){

    const users = await User.find()

    return reponse.status(200).json(users);
}


//create users on mongodb
async function createUsers(request, reponse){
    const user = request.body;

    const newUser = await User.create(user);
    return reponse.status(201).json(newUser);
}


//search and delete users from mongo db
async function delUsers(request, response){
    const id = request.params.id;

    await User.findByIdAndDelete({ _id: id })

    return response.status(200).json({ response: "user deleted" });
} 


//export the functions
export { createUsers, getUsers, delUsers };