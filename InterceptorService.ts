import axios from "axios";
import store from "../Redux/Store";
import authService from "./AuthService";

class InterceptorService {

    public createInterceptors(): void {

        // Send token for each request: 
        axios.interceptors.request.use(request => {

            if (authService.isLoggedIn()) {
                request.headers = {
                    authorization: "Bearer " + store.getState().authState.token
                };
            }

            return request;

        });

        axios.interceptors.request.use(request => {

            if (authService.isAdmin()) {
                request.headers = {
                    authorization: "Bearer " + store.getState().authState.token
                }
            }
            return request;
        })

    }

}

const interceptorService = new InterceptorService();

export default interceptorService;