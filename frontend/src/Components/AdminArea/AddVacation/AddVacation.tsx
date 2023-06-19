import { useEffect, useState } from "react";
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
import ContinentModel from "../../../Models/ContinentModel";


function AddVacation(): JSX.Element {
    const {register, handleSubmit}= useForm<VacationModel>()
    const [continents, setContinents] = useState<ContinentModel[]>()
    const navigate= useNavigate()
    const [selectedImage, setSelectedImage] = useState();


    useEffect(()=> {
VacationService.getAllContinents()
.then((continents)=> {
setContinents(continents)
})
.catch(err=> console.log(err))
    },[])

    const send= (data:VacationModel)=>{
        AdminService.addVacation(data)
        .then(()=>{
            alert("vacation successfully added!")
            navigate("/home")
        })
        .catch(err=> console.log(err))
}
    // This function will be triggered when the file field changes
    const imageChange = (e:any) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files.value[0]);
        }
      };

    return (

        <FormLayout 
        imageSrc={snowBoard} 
        formContent={  
        <div className="AddVacation">
            <form onSubmit={handleSubmit(send)}>

                <h3>VACATION PRO Admin Add Vacation</h3>
    
    {/* destination */}
                <FloatingLabel controlId="floatingInput" label="destination" className="mb-3 input outerBoxOfInput">
                  <Form.Control className="input" type="text" placeholder="email" {...register('destination', VacationModel.destinationValidation)} />
                </FloatingLabel>
    
    {/* description */}
                <FloatingLabel controlId="floatingTextarea2" className="large" label="description" >
                    <Form.Control
                    as="textarea"
                    placeholder="description"
                    style={{ height: '100px'}}
                    size="lg"
                    className="insideText"
                    {...register('description', VacationModel.descriptionValidation)} 
                    />
                </FloatingLabel>
  
    {/* startingDate */}
    <br></br>
    <div className="justifyLefy">
    <label htmlFor="startDate">starting date</label>
    </div>
    <br></br>
    <input type="date" className="inputDate"  {...register('startingDate')} required></input>
    <br></br>

    {/* endingDate */}
    <div  className="justifyLefy">
    <label htmlFor="endingDate">ending date</label>
    </div>
    <br></br>
    <input type="date" className="inputDate" {...register('endingDate')} required></input>
    <br></br>
    <br></br>

      {/* price */}
                <FloatingLabel controlId="floatingInput" label="price" className="mb-3 input outerBoxOfInput" >
                  <Form.Control className="input" type="number" placeholder="price" {...register('price')} />
                </FloatingLabel>

      {/* select continent*/}
                <FloatingLabel controlId="floatingSelect" label="selects a continent">
                    <Form.Select aria-label="Floating label select example" defaultValue="" {...register("continentId")}>
                        <option>Open this select menu</option>
                       {continents && continents.map(c=><option key={c.continentId} value={c.continentId}>{c.continentName}</option> )}
                    </Form.Select>
                </FloatingLabel>


                <input accept="image/*" type="file" onChange={imageChange} {...register("image")}/>

                     {/* {selectedImage &&  (<div ><p>{URL.createObjectURL(selectedImage)}</p></div>)}    // This (URL.createObjectURL) sets it as a url- string, rather than a File... */}
          {selectedImage &&  <div ><img src={URL.createObjectURL(selectedImage)} alt="PreviewImage"/></div>}

                <FrameBtn btnString="Add Vacation" />

            </form>
        
    </div>

}/>
        
      


    );
}

export default AddVacation;
