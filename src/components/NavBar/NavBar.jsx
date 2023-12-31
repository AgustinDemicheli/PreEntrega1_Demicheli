import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../../assets/SINSAJO.png"

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src= {logo} alt= "logo" className="img-fluid"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Our proyects < PhotoCameraIcon /></a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Contact US</a>
                        </li>
                        <li className="nav-item Cart">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

