import express from "express";
//import the path to connect on mongodb atlas
import connectDb from "./db/db.js";
//import routes of request and response 
import routes from "./routes.js"

const app = express();

//uses .json format
app.use(express.json());

//point the routes for req and res
app.use(routes);


//atempts connection with mongodb atlas
connectDb()
.then(() => {app.listen(3000, () => {console.log("Servidor online e banco de dados conectado!!")})})
.catch(() => console.log("deu ruim"))

