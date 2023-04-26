import user from "../models/user.js";
import User from "../models/user.js";


async function getUsers(request, reponse){

    const users = await User.find()

    return reponse.status(200).json(users);
}

async function createUsers(request, reponse){
    const user = request.body;

    const newUser = await User.create(user);
    return reponse.status(201).json(newUser);
}

async function delUsers(request, response){
    const id = request.params.id;

    await User.findByIdAndDelete({ _id: id })

    return response.status(200).json({ response: "user deleted" });
} 

export { createUsers, getUsers, delUsers };