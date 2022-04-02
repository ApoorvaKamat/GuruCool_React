import React from 'react';
const SocialMediaIcon = (props) => {

    return(
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className={props.className}></i></a>
    )
}

export default SocialMediaIcon;