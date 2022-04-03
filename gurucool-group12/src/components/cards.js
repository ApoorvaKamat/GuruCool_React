import React,{useState} from "react";
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import defaultProfilePic from "../assets/default-profile.svg"


export const Cards = (props) => {
  const [selectedTutor, setSelectedTutor]= useState({});
  const onTutorSelect = (tutor) => {
    console.log("index",tutor);
    setCentredModal(!centredModal)
    setSelectedTutor(tutor);
  }
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);


  return(
        <>
            {props.filterData && props.filterData.map((tutor,index)=>{
            const {tutorName, profilePicture, tutorDescription, tutorLocation, tutorRating, workingHours,tutorExpertise} = tutor;
            return <div key={`tutor-${index}`} onClick={()=>onTutorSelect(tutor)} className="bg-light opacity-75 tutor-card-container" >
                <div className="tutor-name">{tutorName}</div>
                <div className="tutor-profile">
                  <div className="profile-pic-container">
                     <img src={profilePicture?profilePicture:defaultProfilePic} alt={defaultProfilePic} className="profile-pic"></img>
                  </div>
                  <div className="profile-details">
                    <div className="description">
                      <span className="bold-font">Description : </span> 
                      <span>{tutorDescription}</span>
                    </div>
                    <div className="rating">
                      <span className="bold-font"> Rating : </span>
                      <span>{tutorRating}</span>
                     </div>
                     <div className="expertise">
                      <span className="bold-font"> Expertise : </span>
                      <span>{tutorExpertise}</span>
                     </div>
                   
                  </div>
                </div>
            </div>
        
            
          })
        
          }
      <MDBModal  tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog  >
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{selectedTutor.tutorName}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody >
            <div>
              <span className="bold-font"> Country : </span>
                <span>{selectedTutor.tutorLocation.country}</span>
              </div>
            <div>
              <span className="bold-font"> State : </span>
                <span>{selectedTutor.tutorLocation.state}</span>
              </div>
              <div>
              <span className="bold-font"> City : </span>
                <span>{selectedTutor.tutorLocation.city}</span>
              </div>
              <div>
              <span className="bold-font"> No.of working hours : </span>
                <span>{selectedTutor.noOfHrsPerDay}</span>
              </div>
            <div>
              <span className="bold-font"> No.of available appointments : </span>
                <span>{selectedTutor.noOfAppointmentsAvailable}</span>
              </div>

              
             
            </MDBModalBody>
            <MDBModalFooter>
             
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
        </>
        
    )
}