import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload"
import routeNotFound from "./3-Middleware/route-not-found";
import catchAll from "./3-Middleware/catch-all";
import appConfig from "./2-Utils/AppConfig";
import vacation_router from "./6-Controllers/vacation-controller";
import auth_controller from "./6-Controllers/auth-controller";
import sanitize from "./3-Middleware/sanitize";
import expressRateLimit from "express-rate-limit";
import helmet from "helmet";
import directory222 from "./1-Assets/images/dir";
import filter_router from "./6-Controllers/filter-controller";

const server = express()

server.use(cors()); 

server.use(express.json())

server.use(sanitize);

server.use(fileUpload()) 

server.use("/api", auth_controller)
server.use("/api", vacation_router)
server.use("/api", filter_router)

server.use("*", routeNotFound)

server.use(catchAll)

server.listen(appConfig.port, ()=> console.log(`I am listening to port ${appConfig.port}`))
console.log("I am app")