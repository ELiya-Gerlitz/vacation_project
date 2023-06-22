import { FloatingLabel } from "react-bootstrap";
import {useNavigate, useParams } from "react-router-dom";
import VacationModel from "../../../Models/VacationModel";
import FrameBtn from "../../ElementsArea/FrameBtn/FrameBtn";
import FormLayout from "../../ElementsArea/formLayout/formLayout";
import "./EditVacation.css";
import Form from 'react-bootstrap/Form';
import kite_surf from "../../../Assets/images/young-man-with-kitesurf-board.jpg"
import carrebean from "../../../Assets/images/Caribbean-All-inclusive-Family-Resorts.jpg"
import parachute from "../../../Assets/images/parachute_colorful.jpg"
import snowBoard from "../../../Assets/images/Snowboard_helmet.jpg"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ContinentModel from "../../../Models/ContinentModel";
import VacationService from "../../../Services/VacationService";
import AdminService from "../../../Services/AdminService";
import appConfig from "../../../Utils/AppConfig";
import dateFormatting from "../../../Services/dateFormatting";


function EditVacation(): JSX.Element {
    const {register, setValue, handleSubmit} = useForm<VacationModel>()
    const [continents, setContinents] = useState<ContinentModel[]>()
    const navigate = useNavigate()
    const params = useParams()
    const [selectedImage, setSelectedImage] = useState()
    const [vacation, setVacation] = useState<VacationModel>()
    const [startingDate, setStartingDate] = useState("")
    const [endingDate, setEndingDate] = useState("")


    function formatDate(dateString :string):string {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    useEffect(()=>{
        const vacationId = + params.vacationId
        AdminService.getSingleVacation(vacationId)
        .then((vacation)=>{
          
            setValue("startingDate", formatDate(vacation.startingDate))
            // setValue("endingDate", formatDate(vacation.endingDate))
            setValue("vacationId", vacation.vacationId)
            setVacation(vacation)
        })
        .catch((err:any)=>{console.log(err)})
    },[])

    useEffect(()=> {
        VacationService.getAllContinents()
        .then((continents)=> {
        setContinents(continents)
        })
        .catch(err=> console.log(err))
    },[])

 const send = ( data : VacationModel )=> { 
      if (startingDate && endingDate && startingDate <= endingDate) {
        AdminService.updateVacation(data)
        .then(()=> {
            alert("vacation successfully updated!")
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
            <div className="EditVacation">
            <form onSubmit={handleSubmit(send)}>

                <h3>VACATION PRO Admin Edit Vacation</h3>
                <input hidden type="number" {...register("vacationId")}/>
    {/* destination */}
                <FloatingLabel controlId="floatingInput" label="destination" className="mb-3 input outerBoxOfInput">
                  <Form.Control className="input" type="text" placeholder="email" defaultValue={vacation &&  vacation.destination} {...register('destination', VacationModel.destinationValidation)} />
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
                    defaultValue={vacation &&  vacation?.description}
                    />
                </FloatingLabel>
    {/* startingDate */}
                <label htmlFor="startDate" className="justifyLefy">starting date</label>
                {/* <input type="Date | string"  className="inputDate" defaultValue={vacation &&  vacation.startingDate}  {...register('startingDate' , { valueAsDate: true })} required></input> */}
                <input type="date" className="inputDate" defaultValue={vacation &&  formatDate(vacation?.startingDate)}  {...register('startingDate')} required onChange={(e :any) => setStartingDate(e.target.value)}></input>

    {/* endingDate */}
                <label htmlFor="endingDate" className="justifyLefy">ending date</label>
                {/* <input type="Date | string" className="inputDate" {...register('endingDate', { valueAsDate: true })} required></input> */}
                <input type="date" className="inputDate" defaultValue={vacation &&  formatDate(vacation?.endingDate)}  {...register('endingDate')} required onChange={(e:any) => setEndingDate(e.target.value)}></input>
                <br></br>
    
      {/* price */}
                <FloatingLabel controlId="floatingInput" label="price" className="mb-3 input outerBoxOfInput" >
                  <Form.Control className="input" type="number" defaultValue={vacation &&  vacation.price} placeholder="price" {...register('price', VacationModel.priceValidation)} />
                </FloatingLabel>

      {/* select continent*/}
                <FloatingLabel controlId="floatingSelect" label="Selects a continent" className="input">
                    <Form.Select aria-label="Floating label select example" {...register("continentId")}>
                     <option defaultValue={vacation?.continentId}>{vacation?.continentName}</option> 
                       {continents && continents.map(c=><option key={c.continentId} value={c.continentId} >{c.continentName}</option> )}
                    </Form.Select>
                </FloatingLabel>
                <br></br>

  {/*change image*/}
                <div className="imageInput">
                <img src={vacation && appConfig.imgUrl + vacation?.imageName}/>
                <input accept="image/*" type="file" onChange={imageChange} {...register("image")} defaultValue={vacation?.imageName}/>
                </div>

                {/* {selectedImage &&  (<div ><p>{URL.createObjectURL(selectedImage)}</p></div>)}    // This (URL.createObjectURL) sets it as a url- string, rather than a File... */}
                {selectedImage &&  <div ><img src={URL.createObjectURL(selectedImage)} alt="PreviewImage"/></div>}
             <div className="btnWrapper">
                <FrameBtn btnString="Update Vacation" />
            </div>
            </form>
    </div>
}/>
    );
}

export default EditVacation;
