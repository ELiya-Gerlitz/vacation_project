import { useForm } from "react-hook-form";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/authService";
import { AuthStore } from "../../../Redux/AuthState";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import FrameBtn from "../../ElementsArea/FrameBtn/FrameBtn";
import FormLayout from "../../ElementsArea/formLayout/formLayout";
import surfing from "../../../Assets/images/young-man-with-kitesurf-board.jpg"
import snowBoard from "../../../Assets/images/Snowboard_helmet.jpg"
import skiing from "../../../Assets/images/skii.jpg"




function Login(): JSX.Element {
        const { handleSubmit, register, formState} = useForm<CredentialsModel>()
        const navigate = useNavigate();
    
        const send = (data: CredentialsModel) => {
            if(AuthStore.getState().token){
                alert("you are already logged in!")
            }else{
              authService.login(data)
              .then(() => { 
                  alert("successfully logged in")
                  navigate("/destinations") 
                })
              .catch(err => {alert(err)
              alert(err.message[0])})
            }
        }

        
   const pic = [
    snowBoard,
    surfing,
    skiing
]
const num = Math.floor(Math.random()* pic.length)

    return (
        <FormLayout
        imageSrc={pic[num]}
        formContent={
          <div className="Login">
              <form onSubmit={handleSubmit(send)}>
              <h3>VACATION PRO Login</h3>
                <span className="errorSpan">{formState.errors?.email?.message}</span>
                <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 input outerBoxOfInput">
                  <Form.Control className="input" type="email" placeholder="email" {...register('email', CredentialsModel.emailValidation)} />
                </FloatingLabel>

              <span className="errorSpan">{formState.errors?.password?.message}</span>
                <FloatingLabel className="input outerBoxOfInput" controlId="floatingPassword" label="Password">
                  <Form.Control className="input" type="password" placeholder="Password" {...register('password', CredentialsModel.passwordValidation)} />
                </FloatingLabel>
  
                <FrameBtn btnString="Login" />

                <p>don't have an account? </p>
                <NavLink to={"/auth/register"}>register now</NavLink>
              </form>
          </div>
        }
      />
    );
}

export default Login;