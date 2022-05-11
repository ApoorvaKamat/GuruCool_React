import React from "react";
const CompletedAppts=(props)=>{
    return(
        <div class="container">
        <div class="list_cmplt">
            <div class="box" style={{color: "white"}}>
            <div class="content">
                <div class="icon">
                <i class="bi bi-calendar-check-fill"></i>
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
export default CompletedAppts;