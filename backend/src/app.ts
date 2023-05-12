import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload"
import routeNotFound from "./3-Middleware/route-not-found";
import catchAll from "./3-Middleware/catch-all";
import appConfig from "./2-Utils/AppConfig";
import vacation_router from "./6-Controllers/vacation-controller";
import auth_controller from "./6-Controllers/auth-controller";

const server= express()

server.use(cors()); // Allow any site to access our backend
// server.use(cors({ origin: "http://localhost:3000" })); // Allow only this site to access our backend
// server.use(cors({ origin: ["http://localhost:3000", "http://some-other.com"] })); // Allow only those sites to access our backend
server.use(express.json())
server.use(fileUpload())

server.use("/api", auth_controller)
server.use("/api", vacation_router)
server.use("*", routeNotFound)

server.use(catchAll)


server.listen(appConfig.port, ()=> console.log(`I am listening to port ${appConfig.port}`))
console.log("I am app")