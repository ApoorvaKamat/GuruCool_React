import React from 'react';
import SocialMediaIcon from './socialmedia.js';
const Footer = () =>{
    return(
        <footer className="bg-dark text-center text-white opacity-75 customfooter">
          <div className="container py-4">
            <section>
            <SocialMediaIcon className="bi bi-facebook"/>
            <SocialMediaIcon className="bi bi-twitter"/>
            <SocialMediaIcon className="bi bi-google"/>
            <SocialMediaIcon className="bi bi-instagram"/>
            <SocialMediaIcon className="bi bi-linkedin"/>
            <SocialMediaIcon className="bi bi-github"/>
            </section>
          </div>
          <div className="text-center p-3 copywrite">
        
            © 2022 Copyright:
            <a className="text-white" href="https://Gurucool.com/">Gurucool.com</a>
          </div>
        </footer> 
    );                          
}

export default Footer;