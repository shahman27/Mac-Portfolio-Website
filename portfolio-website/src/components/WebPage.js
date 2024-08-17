import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "../styles/WebPage.css";
import Nav from "./Nav";
import "react-resizable/css/styles.css";

function WebPage() {
  const [size, setSize] = useState({ width: 700, height: 600 });

  return (
    <div className="main-container">

      {/* The draggable and resizable content box */}
      <Draggable handle=".drag-handle">
        <div style={{ position: "absolute", top: "70px", left: "50px" }}>
          <ResizableBox
            width={size.width}
            height={size.height}
            minConstraints={[200, 200]} // Minimum size
            maxConstraints={[window.innerWidth - 100, window.innerHeight - 100]} // Maximum size
            onResize={(e, data) => {
              setSize({
                width: data.size.width,
                height: data.size.height,
              });
            }}
            resizeHandles={["se"]} // Resizing from the bottom-right corner
          >
            <div className="WebPage" style={{ width: "100%", height: "100%" }}>
              <div className="drag-handle">
                {/* This is the draggable handle */}
                <div className="WebPage">
                    <div className="Exit">
                        <Nav colour="red" />
                        <Nav colour="yellow" />
                        <Nav colour="green" />
                    </div>
                </div>
              </div>
              <div className="content">
                {/* Your content goes here */}
              </div>
            </div>
          </ResizableBox>
        </div>
      </Draggable>
    </div>
  );
}

export default WebPage;
