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
import kite_surf from "../../../Assets/images/young-man-with-kitesurf-board.jpg"
import carrebean from "../../../Assets/images/Caribbean-All-inclusive-Family-Resorts.jpg"
import parachute from "../../../Assets/images/parachute_colorful.jpg"
import snowBoard from "../../../Assets/images/Snowboard_helmet.jpg"
import ContinentModel from "../../../Models/ContinentModel";


function AddVacation(): JSX.Element {
    const {register, handleSubmit}= useForm<VacationModel>()
    const [continents, setContinents] = useState<ContinentModel[]>()
    const navigate= useNavigate()
    const [selectedImage, setSelectedImage] = useState();
    const [startingDate, setStartingDate] = useState('');
    const [endingDate, setEndingDate] = useState('');


    useEffect(()=> {
            // alert(VacationStore.getState().vacations + "StoreGetState")
            VacationService.getAllContinents()
            .then((continents)=> {
            setContinents(continents)
            })
            .catch(err=> console.log(err))
        },[])

        const handleStartingDateChange = (e : any) => {
            setStartingDate(e.target.value);
          };

        const handleEndingDateChange = (e : any) => {
            setEndingDate(e.target.value);
          };

   
    const send= (data:VacationModel)=>{
  // eslint-disable-next-line no-restricted-globals
        event.preventDefault()
        if (startingDate && endingDate && startingDate <= endingDate) {
        AdminService.addVacation(data)
        .then(()=> {
            alert("vacation successfully added!")
            navigate("/home")
        })
        .catch(err=> console.log(err))
    }else{
        alert("Ending Date can't precede starting date!")

    }
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

    <label htmlFor="startDate" className="justifyLefy">starting date</label>

    <input type="date" className="inputDate"  {...register('startingDate')} required  min={new Date().toISOString().split('T')[0]}  onChange={handleStartingDateChange} ></input>


    {/* endingDate */}
    <label htmlFor="endingDate" className="justifyLefy">ending date</label>
    <input type="date" className="inputDate" {...register('endingDate')} required  onChange={handleEndingDateChange}></input>
    <br></br>
    
      {/* price */}
                <FloatingLabel controlId="floatingInput" label="price" className="mb-3 input outerBoxOfInput" >
                  <Form.Control className="input" type="number" placeholder="price" {...register('price', VacationModel.priceValidation)} />
                </FloatingLabel>

      {/* select continent*/}
                <FloatingLabel controlId="floatingSelect" label="selects a continent" className="input">
                    <Form.Select aria-label="Floating label select example" defaultValue="" {...register("continentId")}>
                        <option>Open this select menu</option>
                       {continents && continents.map(c=><option key={c.continentId} value={c.continentId}>{c.continentName}</option> )}
                    </Form.Select>
                </FloatingLabel>
                <br></br>

                <div className="imageInput">
                <input accept="image/*" type="file" onChange={imageChange} {...register("image")}/>
                </div>

                     {/* {selectedImage &&  (<div ><p>{URL.createObjectURL(selectedImage)}</p></div>)}    // This (URL.createObjectURL) sets it as a url- string, rather than a File... */}
          {selectedImage &&  <div ><img src={URL.createObjectURL(selectedImage)} alt="PreviewImage"/></div>}

                <FrameBtn btnString="Add Vacation" />

            </form>
        
    </div>

}/>
        
      


    );
}

export default AddVacation;
