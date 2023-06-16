import { useEffect } from "react";
import "./AddVacation.css";
import VacationService from "../../../Services/VacationService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import VacationModel from "../../../Models/VacationModel";
import AdminService from "../../../Services/AdminService";
import FormLayout from "../../ElementsArea/formLayout/formLayout";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import FrameBtn from "../../ElementsArea/FrameBtn/FrameBtn";
import surfing from "../../../Assets/images/young-man-with-kitesurf-board.jpg"
import snowBoard from "../../../Assets/images/Snowboard_helmet.jpg"

function AddVacation(): JSX.Element {
    const {register, handleSubmit}= useForm<VacationModel>()
    const navigate= useNavigate()

    const send= (data:VacationModel)=>{
        AdminService.addVacation(data)
        .then(()=>{
            console.log("vacation successfully added!")
            navigate("/home")
        })
        .catch(err=> console.log(err))
}
    return (

        <FormLayout 
        imageSrc={snowBoard} 
        formContent={  
        <div className="AddVacation">
            <form onSubmit={handleSubmit(send)}>

                <h3>VACATION PRO Admin Add Vacation</h3>
                <FloatingLabel controlId="floatingInput" label="destination" className="mb-3 input outerBoxOfInput">
                  <Form.Control className="input" type="email" placeholder="email" {...register('destination', VacationModel.destinationValidation)} />
                </FloatingLabel>
  
                <FloatingLabel className="input outerBoxOfInput" controlId="floatingPassword" label="description">
                  <Form.Control className="input" type="textarea" placeholder="Description" {...register('description',  VacationModel.descriptionValidation)} />
                </FloatingLabel>
  
                <FrameBtn btnString="Add Vacation" />

            </form>
        
    </div>

}/>
        
      


    );
}

export default AddVacation;
