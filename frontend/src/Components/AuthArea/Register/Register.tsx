import { useForm } from "react-hook-form";
import "./Register.css";
import UserModel from "../../../Models/UserModel";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/authService";
import { AuthStore } from "../../../Redux/AuthState";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import FrameBtn from "../../ElementsArea/FrameBtn/FrameBtn";
import FormLayout from "../../ElementsArea/formLayout/formLayout";
import surfing from "../../../Assets/images/young-man-with-kitesurf-board.jpg"
import skiing from "../../../Assets/images/skii.jpg"
import snowBoard from "../../../Assets/images/Snowboard_helmet.jpg"



function Register(): JSX.Element {
    const { handleSubmit, register, formState } = useForm<UserModel>()
    const navigate = useNavigate();

    const send = (data: UserModel) => {
            if(AuthStore.getState().token){
                alert("you are already logged in!")
            }else{
                alert("Hi")
                authService.register(data)
                .then(() => { console.log("successfully logged in")
                navigate("/home") })
                .catch(err => console.log(err))
            }
    }

   const pic = [
    skiing,
    surfing,
    snowBoard
]
const num = Math.floor(Math.random()* pic.length)

   
       return (
        <FormLayout
        imageSrc={pic[num]}
        formContent={
        <div className="Register">
            <form onSubmit={handleSubmit(send)}>
            <h3>VACATION PRO Register</h3>
            {/* firstName */}
            <span className="errorSpan">{formState.errors?.firstName?.message}</span>
            <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3 input outerBoxOfInput">
                  <Form.Control className="input" type="text" placeholder="First Name" {...register('firstName', UserModel.firstNameValidation)} />
                </FloatingLabel>

            {/* lastName */}
            <span className="errorSpan">{formState.errors?.lastName?.message}</span>
                <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3 input outerBoxOfInput">
                  <Form.Control className="input" type="text" placeholder="Last Name" {...register('lastName', UserModel.lastNameValidation)} />
                </FloatingLabel>

            {/* email */}
            <span className="errorSpan">{formState.errors?.email?.message}</span>
            <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 input outerBoxOfInput">
                  <Form.Control className="input" type="email" placeholder="email" {...register('email', UserModel.emailValidation)} />
                </FloatingLabel>
            
            {/* password */}
            <span className="errorSpan">{formState.errors?.password?.message}</span>
                 <FloatingLabel className="input outerBoxOfInput" controlId="floatingPassword" label="Password">
                  <Form.Control className="input" type="password" placeholder="Password" {...register('password', UserModel.passwordValidation)} />
                </FloatingLabel>
                <FrameBtn btnString="Register"/>
            </form>
        </div>
          }
          />
    );
}

export default Register;