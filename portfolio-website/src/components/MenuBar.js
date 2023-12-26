import React from "react";
import Pineapple from "../assests/pineapple.png";
import {Link} from "react-router-dom";
import Time from "./Time";
import "../styles/menubar.css";

function MenuBar() {
    return (
        <div className="menubar">
                <img src={Pineapple} alt="Logo" className="logo" />
            <div className="options">
                {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link> */}
            </div>
            <div className="widgets">
                <Time />
                {/* <Link to="/Time">Login</Link>
                <Link to="/signup">Sign Up</Link> */}
            </div>
        </div>
    )
}

export default MenuBar