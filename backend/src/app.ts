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

const server = express()

// Defend against DoS attack:
server.use("/api/", expressRateLimit({
    max: 10, // Maximum requests per same client
    windowMs: 1000, // Time window to allow the max requests.
    message: "Are you a hacker?" // When performing more request - return this message
}));

// server.use(helmet()); //deters from images to be accessible!!!

server.use(cors()); // Allow any site to access our backend
// server.use(cors({ origin: "http://localhost:3000" })); // Allow only this site to access our backend
// server.use(cors({ origin: ["http://localhost:3000", "http://some-other.com"] })); // Allow only those sites to access our backend
server.use(express.json())

server.use(sanitize);

server.use(fileUpload())

server.use("/api", auth_controller)
server.use("/api", vacation_router)
server.use("*", routeNotFound)

server.use(catchAll)


directory222()


server.listen(appConfig.port, ()=> console.log(`I am listening to port ${appConfig.port}`))
console.log("I am app")