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
import Button from './buttonLogin';


export const Cards = (props) => {
  const [selectedTutor, setSelectedTutor]= useState({});
  const onTutorSelect = (tutor) => {
    setCentredModal(!centredModal)
    setSelectedTutor(tutor);
  }
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);


  return(
        <>
            {props.filterData && props.filterData.map((tutor,index)=>{
            const {tutorName,tutorExpertise, profilePicture, tutorDescription, tutorLocation, tutorRating, workingHours} = tutor;
            return <div key={`tutor-${index}`} onClick={()=> onTutorSelect(tutor)} className="bg-light opacity-75 tutor-card-container" >
                <div className="tutor-name">{tutorName}<span className="favorite"><i class="bi bi-heart-fill"></i></span></div>
                
                <div className="tutor-profile">
                  <div className="profile-pic-container">
                     <img src={profilePicture?profilePicture:defaultProfilePic} alt={defaultProfilePic} className="profile-pic"></img>
                  </div>
                  <div className="profile-details">
                  <div className="subject">
                  <span><i class="bi bi-trophy-fill"></i> {tutorExpertise}</span>
                </div>
                    <div className="rating">
                 {/* how to add stars dynamically based on ratings? */}
                    <span className="star"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></span>
                      <span> {tutorRating}</span>
                     </div>
                   
                    <div className="location">
                    <span><img className="us-flag" alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/></span>
                      <span>  {tutorLocation.city},{tutorLocation.state},{tutorLocation.country}</span>
                     </div>
                    <div className="working hours">
                    <span className="bold-font">{workingHours}</span>
                    </div>
                      <div className="labels">
                      <ul class="postcard__tagbox">
					                <li class="tag__item"><i class="bi bi-patch-check-fill"></i> Teaching Certificate</li>
                          <li class="tag__item"><i class="bi bi-chat-heart-fill"></i> 1,000+chats</li>
                      </ul>
                      </div>
                      <div className="description">
                      <span className=" postcard__preview-txt"> </span> 
                      <span>{tutorDescription}</span>
                    </div>
                    <div>
                    <Button name="MESSAGE" cls="button-card"/><Button cls="button-card" name="PROFILE"/>
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
           <span className="bold-font"> Know your tutor : </span>
                <span>{selectedTutor.aboutTutor}</span>

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