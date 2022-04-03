import React from 'react';
import Button from './buttonLogin';
import Option from './option';
import { NavBarDropdown } from './navBarDropdown';


const Navbar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-sm bg-info navbar-dark bg-dark ps-5 pe-5 navblack">
            <NavBarDropdown />
            <Option symbol="p-2 bi bi-person" option="Know Your Tutors"/>
            <Option symbol="p-2 bi bi-calendar-check"option="Book An Appointment"/>
            <Button name="Sign Up"/>
            <Button name="Login"/>                        
            </nav>
        </div>
        
    );
};

export default Navbar;