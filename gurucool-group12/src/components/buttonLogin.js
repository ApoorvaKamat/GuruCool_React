import React from "react";
const Button=(props)=>{
    return(
        <div>
            <button class=" btn btn-light btn-md ms-2 loginSignUp">{props.name} </button>
        </div>
    );
};
export default Button;