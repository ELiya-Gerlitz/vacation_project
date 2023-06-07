import { useForm } from "react-hook-form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/authService";
import { AuthStore } from "../../Redux/AuthState";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import HeartOnelineDrawn from "../../ElementsArea/HeartOnelineDrawn/HeartOnelineDrawn";
import FrameBtn from "../../ElementsArea/FrameBtn/FrameBtn";


function Login(): JSX.Element {
        const { handleSubmit, register } = useForm<CredentialsModel>()
        const navigate = useNavigate();
    
        const send = (data: CredentialsModel) => {
            if(AuthStore.getState().token){
                alert("you are already logged in!")
            }
            authService.login(data)
                .then(() => { 
                    alert("successfully logged in")
                    navigate("/home") })
                .catch(err => {alert(err)
                console.log(err)})
        }

    return (
        <div className="Login">
            <h3>Login</h3>
              <div className="rightDiv">
                <form onSubmit={handleSubmit(send)}>
                    <FloatingLabel  controlId="floatingInput" label="Usernme" className="mb-3 input">
                        <Form.Control className="input" type="text" placeholder="username" {...register('username', CredentialsModel.usernameValidation)}/>
                    </FloatingLabel>

                    <FloatingLabel className="input" controlId="floatingPassword" label="Password">
                        <Form.Control className="input" type="password" placeholder="Password" {...register('password', CredentialsModel.passwordValidation)} />
                    </FloatingLabel>

                    <FrameBtn btnString="Login"/>
                </form> 
            </div>
        </div>
    );
}

export default Login;