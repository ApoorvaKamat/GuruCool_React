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
import Appointment from './upcomingAppts';
import CompletedAppts from "./completedAppts";
import Heart from "./heart";


export const Cards = (props) => {
  const [selectedTutor, setSelectedTutor]= useState({});
  const onTutorSelect = (tutor) => {
    setCentredModal(!centredModal)
    setSelectedTutor(tutor);
  }
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  const [heart,setHeartSeceted] = useState(false);
  const onHeartSelect = (ind) => {
   
      setHeartSeceted(true);
          console.log(ind);
          console.log(this.index);
  }

  return(
        <>
          <div>
          <div className="appointment_col">
          <h4 style={{color: "black", alignContent:"center"}}>Upcoming Appointments</h4>
        <Appointment tutor="Virtual Reality: Apoorva Pise" date="15th May: 12:00 pm - 2:00 pm"/>
        <Appointment tutor="Python: Shambhavi Sant" date="20th May: 5:00 pm - 7:00 pm"/>
        <Appointment tutor="C++ : Apoorva Kamat" date="21th May: 10:00 am - 12:00 pm"/>
         
        
          <h4 style={{color: "black", alignContent:"center"}}>Completed Appointments</h4>
        <CompletedAppts tutor="Virtual Reality: Apoorva Pise" date="10th May: 12:00 pm - 2:00 pm"/>
        <CompletedAppts tutor="Python: Shambhavi Sant" date="5th May: 2:00 pm - 3:30 pm"/>
        
          </div>
          </div>
        

            {props.filterData && props.filterData.map((tutor,index)=>{
            const {tutorName,tutorExpertise, profilePicture, tutorDescription, tutorLocation, tutorRating, workingHours} = tutor;
            return <div key={`tutor-${index}`}   className="bg-light opacity-75 tutor-card-container" >
                <div className="tutor-name">{tutorName}<span className="favorite"><i class={heart? `bi bi-heart-fill` : `bi bi-heart`} onClick = {()=>onHeartSelect(index)}></i></span></div>
                
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
                  
                  </div>
                </div>
                <div>
                    <Button name="PROFILE" cls="button-card"/><Button cls="button-card" name="RATE"/><Button cls="button-card" name="BOOK APPOINTMENT"/>
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