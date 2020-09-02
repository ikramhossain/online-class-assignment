import React from 'react';
import './menubar.css'
 


const Menubar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark">
            <div className="menu-item">
            <a href="home">Home</a>
            <a href="courses">Courses</a>
            <a href="about us">About Us</a>
            </div>
        </nav>
    );
};

export default Menubar;