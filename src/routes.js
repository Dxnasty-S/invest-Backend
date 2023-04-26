import { Router } from "express";

import { createUsers, getUsers, delUsers } from "./controllers/UserController.js";


const routes = Router();


//routes for req and res
routes.post("/users", createUsers);
routes.get("/users", getUsers);
routes.delete("/users/:id", delUsers);


export default routes;