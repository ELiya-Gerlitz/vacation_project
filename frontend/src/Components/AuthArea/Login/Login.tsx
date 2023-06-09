import { useForm } from "react-hook-form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/authService";
import { AuthStore } from "../../../Redux/AuthState";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import HeartOnelineDrawn from "../../ElementsArea/HeartOnelineDrawn/HeartOnelineDrawn";
import FrameBtn from "../../ElementsArea/FrameBtn/FrameBtn";
import FormLayout from "../../ElementsArea/formLayout/formLayout";
import surfing from "../../../Assets/images/young-man-with-kitesurf-board.jpg"



function Login(): JSX.Element {
        const { handleSubmit, register } = useForm<CredentialsModel>()
        const navigate = useNavigate();
    
        const send = (data: CredentialsModel) => {
            if(AuthStore.getState().token){
                alert("you are already logged in!")
            }else{
              authService.login(data)
              .then(() => { 
                  alert("successfully logged in")
                  navigate("/destinations") })
              .catch(err => {alert(err)
              console.log(err)})
            }
        }

    return (
        <FormLayout
        imageSrc={surfing}
        formContent={
          <div className="Login">
              <form onSubmit={handleSubmit(send)}>
              <h3>VACATION PRO Login</h3>
                <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 input outerBoxOfInput">
                  <Form.Control className="input" type="email" placeholder="email" {...register('email', CredentialsModel.emailValidation)} />
                </FloatingLabel>
  
                <FloatingLabel className="input outerBoxOfInput" controlId="floatingPassword" label="Password">
                  <Form.Control className="input" type="password" placeholder="Password" {...register('password', CredentialsModel.passwordValidation)} />
                </FloatingLabel>
  
                <FrameBtn btnString="Login" />
              </form>
          </div>
        }
      />
    );
}

export default Login;