import React from "react";
import defaultProfilePic from "../assets/default-profile.svg"
import Button from './buttonLogin';

export const Cards = (props) => {
    return(
        <>
            {props.filterData && props.filterData.map((tutor,index)=>{
            const {tutorName,tutorExpertise, profilePicture, tutorDescription, tutorLocation, tutorRating, workingHours} = tutor;
            return <div key={`tutor-${index}`} className="bg-light opacity-75 tutor-card-container" >
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
          })}
        </>

        //my card component
        
    )
}