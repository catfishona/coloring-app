import React, { useState } from "react";
import "./App.css";
import Flower from "./components/Flower";

function App() {
  const [fillColor, setFillColor] = useState(Array(12).fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");

  const onFillColor = (i) => {
    let newFillColors = fillColor.slice(0)
    newFillColors[i] = currentColor
    setFillColor(newFillColors)
  }

  return (
    <div className="App">
      <Flower fillColor={fillColor} onFill={onFillColor}/>
    </div>
  );
}

export default App;
