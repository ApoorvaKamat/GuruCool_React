import React from "react";
const Appointment=(props)=>{
    return(
        <div class="container">
        <div class="list">
            <div class="box" style={{color: "rgb(5, 68, 119)"}}>
            <div class="content">
                <div class="icon">
                <i class="bi bi-calendar2-event-fill"></i>
                </div>
                <div class="text">
                <h6>{props.tutor}</h6>
                <p>{props.date}</p>
                </div>
            </div>
            </div>
        
        </div>
        </div>
    );
};
export default Appointment;