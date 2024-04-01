import React from "react";
import "../styles/dock.css";
import AppIcon from "./AppIcon";

function Dock() {
    return (
        <div className="dock">
            <AppIcon />
            <AppIcon />
            <AppIcon />
            <AppIcon />
            <AppIcon />
        </div>
    )
}

export default Dock;