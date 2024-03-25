import React from "react";
import Draggable from "react-draggable";
import "../styles/WebPage.css";
import Nav from "./Nav";

function WebPage() {
    return (
        <Draggable>
            <div className="WebPage">
                <div className="Exit">
                    <Nav colour="red" />
                    <Nav colour="yellow" />
                    <Nav colour="green" />
                </div>
            </div>
        </Draggable>
    )
}

export default WebPage;