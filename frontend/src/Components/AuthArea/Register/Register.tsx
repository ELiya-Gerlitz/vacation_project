import { useForm } from "react-hook-form";
import "./Register.css";
import UserModel from "../../../Models/UserModel";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/authService";
import { AuthStore } from "../../Redux/AuthState";

function Register(): JSX.Element {
    const { handleSubmit, register } = useForm<UserModel>()
    const navigate = useNavigate();

    const send = (data: UserModel) => {
        alert("Hu")
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
    const buy = ()=>{
        alert("buy")
    }

    return (
        <div className="Register">
            <form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="firstName" {...register('firstName', UserModel.firstNameValidation)} />
                <input type="text" placeholder="lastName" {...register('lastName', UserModel.lastNameValidation)} />
                <input type="email" placeholder="email" {...register('email', UserModel.emailValidation) }  />
                <input type="password" placeholder="password" {...register('password', UserModel.passwordValidation)} />
                <strong><button>register</button></strong>
            </form>
            <button onClick={buy}></button>

        </div>
    );
}

export default Register;