import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "../styles/WebPage.css";
import "react-resizable/css/styles.css";

function WebPage() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [size, setSize] = useState({ width: 400, height: 300 });

  // Function to close the webpage
  const closeWebPage = () => {
    // You can redirect to a different page or hide the component
    window.close(); // For demonstration purposes, this closes the current tab (may be blocked by some browsers)
  };

  // Function to minimize the webpage
  const minimizeWebPage = () => {
    setIsMinimized(true);
  };

  // Function to maximize the webpage
  const maximizeWebPage = () => {
    setIsMaximized(!isMaximized); // Toggle maximize state
  };

  return (
    <div className="main-container">
      {/* Only render the content if it's not minimized */}
      {!isMinimized && (
        <Draggable handle=".drag-handle">
          <div
            style={{
              position: "absolute",
              top: "70px",
              left: "50px",
              width: isMaximized ? "100%" : `${size.width}px`,
              height: isMaximized ? "100%" : `${size.height}px`,
            }}
          >
            <ResizableBox
              width={isMaximized ? window.innerWidth : size.width}
              height={isMaximized ? window.innerHeight : size.height}
              minConstraints={[200, 200]} // Minimum size
              maxConstraints={[window.innerWidth, window.innerHeight]} // Maximum size
              onResize={(e, data) => {
                if (!isMaximized) {
                  setSize({
                    width: data.size.width,
                    height: data.size.height,
                  });
                }
              }}
              resizeHandles={["se"]}
            >
              <div className="WebPage" style={{ width: "100%", height: "100%" }}>
                <div className="Exit drag-handle">
                  <div className="circle red" onClick={closeWebPage}></div>
                  <div className="circle yellow" onClick={minimizeWebPage}></div>
                  <div className="circle green" onClick={maximizeWebPage}></div>
                </div>
                <div className="content">
                  {/* Your content goes here */}
                  <p>This is the content area. Drag or resize this box!</p>
                </div>
              </div>
            </ResizableBox>
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default WebPage;
