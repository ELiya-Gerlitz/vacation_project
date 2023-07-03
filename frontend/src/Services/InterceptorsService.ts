import axios from "axios";
import { AuthStore } from "../Redux/AuthState";

class InterceptorsService {

    public createInterceptors(): void {
        axios.interceptors.request.use(request => {
            
            // If we have a token:
            if(AuthStore.getState().token) {
                // Create JWT header with that token:
                request.headers = {
                    authorization: "Bearer " + AuthStore.getState().token 
                };
            }
            return request;
        });
    }
}
const interceptorsService = new InterceptorsService();
export default interceptorsService;
