import React, { useEffect, useState } from "react";

export default function Resize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Set up the event listener
    const handleResize = () => {
      // Handle resize logic
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }); // Empty dependency array to run only once

  return (
    <div>
      <h1>Window Width: {windowWidth}</h1>
    </div>
  );
}
