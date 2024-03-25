import React from "react";
import "../styles/WebPage.css";

function Nav({colour}) {
    const circleStyle = {
        backgroundColor: colour,
    }

    return (
        <div style={circleStyle} className="circle">
            
        </div>
    )
}

export default Nav;