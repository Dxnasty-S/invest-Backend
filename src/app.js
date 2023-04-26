import express from "express";
import connectDb from "./db/db.js";
import routes from "./routes.js"

const app = express();


app.use(express.json());
app.use(routes);


//atempts connection with mongodb atlas
connectDb()
.then(() => {app.listen(3000, () => {console.log("foi caraio")})})
.catch(() => console.log("deu ruim"))

