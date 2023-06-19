import { useNavigate } from "react-router-dom";
import "./ModalExample.css";
import { useState } from "react";
import AdminService from "../../../Services/AdminService";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ModalInterface{
    vacationId: number
}

function ModalExample( props : ModalInterface ): JSX.Element {

    const navigate= useNavigate()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function deleteVacation ( vacationId :number){
    try{
        await AdminService.deleteVacation(vacationId)
        handleClose()
        console.log(`vacation ${vacationId} was successfully deleted!`)
        navigate("/home")
    }catch(err:any){
        alert(err)
    }
}

    return (
        <div className="ModalExample">
        {/* the delete btn with Lordicon *****************************/}
                <button className="toggle-button" onClick={handleShow}>
                        <lord-icon
                            src="https://cdn.lordicon.com/qjwkduhc.json"
                            trigger="hover"
                            colors="primary:#c7166f,secondary:#848484,tertiary:#3080e8"
                            >
                        </lord-icon>
                    <span className="text">Delete</span>
                </button>

                <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>Are you sure you want to delete the vacation?</Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>

              <Button variant="primary" onClick={()=>deleteVacation(props.vacationId)}>
                Delete
              </Button>
            </Modal.Footer>
      </Modal>



			
        </div>
    );
}

export default ModalExample;
