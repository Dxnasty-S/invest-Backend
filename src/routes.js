import { Router } from "express";

import { createUsers, getUsers, delUsers, updateUser, getOneUser } from "./controllers/UserController.js";


const routes = Router();


//routes for req and res
routes.post("/users", createUsers);
routes.get("/users", getUsers);
routes.delete("/users/:id", delUsers);
routes.put("/users/:id", updateUser);
routes.get("/users/:id", getOneUser);

export default routes;
