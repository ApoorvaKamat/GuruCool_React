import React from "react";
import defaultProfilePic from "../assets/default-profile.svg"

export const Cards = (props) => {
    return(
        <>
            {props.filterData && props.filterData.map((tutor,index)=>{
            const {tutorName, profilePicture, tutorDescription, tutorLocation, tutorRating, workingHours} = tutor;
            return <div key={`tutor-${index}`} className="bg-light opacity-75 tutor-card-container" >
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
                    <div className="location">
                      <span className="bold-font"> Location : </span>
                      <span>{tutorLocation.city},{tutorLocation.state},{tutorLocation.country}</span>
                     </div>
                    <div className="working hours">
                      <span className="bold-font">Working Hours : </span>
                      <span>{workingHours}</span>
                      </div>
                  </div>
                </div>
            </div>
          })}
        </>
        
    )
}