import React,{useState} from "react";
import { MDBBtn,MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,MDBModalFooter} from 'mdb-react-ui-kit';
import defaultProfilePic from "../assets/default-profile.svg"
import Button from './buttonLogin';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import Stars from './starRating'
import TextField from "@material-ui/core/TextField";
const starRating = {
  size: 30,
  count: 5,
  half: true,
  onChange: newValue => {
    console.log(`Rating is ${newValue}`)
  }
}


export const Cards = (props) => {
  const [selectedTutor, setSelectedTutor]= useState({});
 
const [buttonName, setButtonName] = useState('');
const [centredModal, setCentredModal] = useState(false);
const [inputValue, setInputValue] = useState("");
const handleUserInput = (e) => {
  setInputValue(e.target.value);
};
const resetInputField = () => {
  setInputValue("");
  setCentredModal(!centredModal);
};
const toggleShow = () => {
  setCentredModal(!centredModal);
  setInputValue("");
}
const onButtonClick = (buttonName,tutor) => {
 setButtonName(buttonName);
 setCentredModal(!centredModal);

 setSelectedTutor(tutor);
}
const [startDate, setStartDate] = useState(
  setHours(setMinutes(new Date(), 0), 17)
);
return(
<>
{
  props.filterData && props.filterData.map(
  (tutor,index)=>
  {
  const {tutorName,tutorExpertise, profilePicture, tutorDescription, tutorLocation, tutorRating, workingHours} = tutor;
  return <div key={`tutor-${index}`}  className="bg-light opacity-75 tutor-card-container" >
  <div className="tutor-name">{tutorName}<span className="favorite"><i class="bi bi-heart-fill"></i></span></div>
  {/* onClick={()=> onTutorSelect(tutor)} */}
  <div className="tutor-profile">
  <div className="profile-pic-container">
  <img src={profilePicture?profilePicture:defaultProfilePic} alt={defaultProfilePic} className="profile-pic"></img>
  </div>
                  <div className="profile-details">
                  <div className="subject">
                  <span><i class="bi bi-trophy-fill"></i> {tutorExpertise}</span>
                </div>
                <div className="rating">
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
                  
                    <button  onClick={()=>onButtonClick('profile',tutor) }>Profile</button>
                    <button  onClick={()=>onButtonClick('rating',tutor)}>Rating</button>
                    <button onClick={()=>onButtonClick('booking',tutor)}>Booking</button>
                    <div>     
              {
                (() => {
                    if(buttonName==='profile') {
                            return (
                            
                              <MDBModal  tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                              <MDBModalDialog >
                                <MDBModalContent>
                                  <MDBModalHeader>
                                    <MDBModalTitle>{selectedTutor.tutorName}</MDBModalTitle>
                                    <button class="btn btn-danger btn-md " onClick={toggleShow}>Close</button>
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
                                
                                </MDBModalContent>
                              </MDBModalDialog>
                            </MDBModal>
                            )
                        } else if (buttonName==='rating') {
                            return (
                              <MDBModal  tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                              <MDBModalDialog >
                                <MDBModalContent>
                                  <MDBModalHeader>
                                    <MDBModalTitle>{selectedTutor.tutorName}</MDBModalTitle>
                                    <div class='d-flex justify-content-center'>
                                    
                                    <button class="btn btn-success mr-2" onClick={resetInputField}>Submit</button>
                                    <button class="btn btn-danger btn-md " onClick={toggleShow}>Close</button>
                                    </div>
                                  </MDBModalHeader>
                                  <MDBModalBody >
                              <div>
                              <span className="bold-font" > Share your feedback </span>
                                <TextField  color="primary" focused value={inputValue} onChange={handleUserInput}/>
                                <Stars {...starRating} />
                                
                            </div>
                            </MDBModalBody>
                                 
                                </MDBModalContent>
                              </MDBModalDialog>
                            </MDBModal>
                          
          
                            )
                        } else {
                            return (
                              <MDBModal class="modal" tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                              <MDBModalDialog >
                                <MDBModalContent className="modalcontent">
                                  <MDBModalHeader>
                                    <MDBModalTitle>{selectedTutor.tutorName}</MDBModalTitle>
                                    
                                    {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
                                    <div class='d-flex justify-content-center'>
                                    <button class="btn btn-success mr-2" onClick={resetInputField}>Book</button>
                                    <button class="btn btn-danger btn-md " onClick={toggleShow}>Cancel</button>
                                    </div>
                                  </MDBModalHeader>
                                  <MDBModalBody >
                                  <DatePicker className="date-picker-wrapper"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    minTime={setHours(setMinutes(new Date(), 0), 9)}
                                    maxTime={setHours(setMinutes(new Date(), 0), 19)}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                  />
                                 
                                 
                                  </MDBModalBody>
                                  <MDBModalFooter>   
                                  </MDBModalFooter>
                                </MDBModalContent>
                              </MDBModalDialog>
                            </MDBModal>
                            )
                        }
                })()  
            }  
        </div>  
                     
                    </div>
                 
            
                    </div>
                 
          }
        )
        
        }
        
      
      
        </>

        
    )
}
