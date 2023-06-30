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
import snowBoard from "../../../Assets/images/Snowboard_helmet.jpg"
import ContinentModel from "../../../Models/ContinentModel";
import surfing from "../../../Assets/images/young-man-with-kitesurf-board.jpg"
import skiing from "../../../Assets/images/skii.jpg"
import notifyService from "../../../Services/NotifyService";

function AddVacation(): JSX.Element {
    const {register, handleSubmit, formState}= useForm<VacationModel>()
    const [continents, setContinents] = useState<ContinentModel[]>()
    const navigate= useNavigate()
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [startingDate, setStartingDate] = useState();
    const [endingDate, setEndingDate] = useState();

    useEffect(()=> {
            VacationService.getAllContinents()
            .then((continents)=> {
            setContinents(continents)
            })
            .catch(err=> console.log(err.response?.data))
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
          notifyService.success("vacation successfully added!")
            // alert("vacation successfully added!")
            navigate("/home")
        })
        .catch(err=> {
          console.log(err)
          notifyService.error(err)
        })
    }else{
        alert("Ending Date can't precede starting date!")
    }
}
    // This function will be triggered when the file field changes
    // const imageChange = (e:any) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //       setSelectedImage(e.target.files.value[0]);
         
    //     }
    //   };


      const imageChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        const image = e.target.files?.[0]
        if(image){
          const reader = new FileReader()
          reader.onloadend = () => {
            setSelectedImage(reader.result as string)
            console.log("hi")
          }
          reader.readAsDataURL(image)
        }
      }


      // const imageChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      //   const file = event.target.files?.[0];
      //   const imageUrl = URL.createObjectURL(file);
      //   console.log(imageUrl)
      //   setSelectedImage(imageUrl);
      // };

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
        <div className="AddVacation">
            <form onSubmit={handleSubmit(send)}>

                <h3>VACATION PRO Admin Add Vacation</h3>
    
    {/* destination */}
                <span className="errorSpan">{formState.errors?.destination?.message}</span>
                <FloatingLabel controlId="floatingInput" label="destination" className="mb-3 input outerBoxOfInput">
                  <Form.Control className="input" type="text" placeholder="email" {...register('destination', VacationModel.destinationValidation)} />
                </FloatingLabel>
    
    {/* description */}
              <span className="errorSpan">{formState.errors?.description?.message}</span>
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
    <span className="errorSpan">{formState.errors?.startingDate?.message}</span>
    <label htmlFor="startDate" className="justifyLeft">starting date</label>

    <input type="date" className="inputDate"  {...register('startingDate')} required  min={new Date().toISOString().split('T')[0]} onChange={handleStartingDateChange}></input> 


    {/* endingDate */}
    <span className="errorSpan">{formState.errors?.endingDate?.message}</span>
    <label htmlFor="endingDate" className="justifyLeft">ending date</label>
    <input type="date" className="inputDate" {...register('endingDate')} required onChange={handleEndingDateChange} min={new Date().toISOString().split('T')[0]}></input>
    <br></br>
    
      {/* price */}
              <span className="errorSpan">{formState.errors?.price?.message}</span>
                <FloatingLabel controlId="floatingInput" label="price" className="mb-3 input outerBoxOfInput" >
                  <Form.Control className="input" type="number" placeholder="price" {...register('price', VacationModel.priceValidation)} />
                </FloatingLabel>
                <span className="errorSpan">{formState.errors?.continentId?.message}</span>


      {/* select continent*/}
                <FloatingLabel controlId="floatingSelect" label="selects a continent" className="input">
                    <Form.Select aria-label="Floating label select example" {...register("continentId", VacationModel.continentIdValidation)} >
                        <option>Open this select menu</option>
                       {continents && continents.map(c=><option key={c.continentId} value={c.continentId}>{c.continentName}</option> )}
                    </Form.Select>
                </FloatingLabel>
                <br></br>

      {/* image*/}
                <span className="errorSpan">{formState.errors?.image?.message}</span>
                <div className="imageInput">
                <input accept="image/*" type="file" onChange={imageChange} {...register("image", VacationModel.imageValidation)} />
                </div>
                {selectedImage &&  <div ><img src={(selectedImage)} alt="PreviewImage"/></div>}
                     {/* {selectedImage &&  (<div ><p>{URL.createObjectURL(selectedImage)}</p></div>)}    // This (URL.createObjectURL) sets it as a url- string, rather than a File... */}
          {/* {selectedImage &&  <div ><img src={URL.createObjectURL(selectedImage)} alt="PreviewImage"/></div>} */}
      

                <FrameBtn btnString="Add Vacation" />

            </form>
        
    </div>

}/>
        
      


    );
}

export default AddVacation;
