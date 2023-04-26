import { Router } from "express";
import { createUsers, getUsers, delUsers } from "./controllers/UserController.js";

const routes = Router();


routes.get("/users", getUsers);
routes.post("/users", createUsers);
routes.delete("/users/:id", delUsers);


export default routes;