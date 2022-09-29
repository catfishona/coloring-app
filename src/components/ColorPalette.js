import React from "react";
import "../App.css";

function ColorPalette(props) {
  const colors = ["red", "green", "blue"];
  return (
    <div>
      {colors.map((color, index) => (
        <div className="swatch" style={{ backgroundColor: color }} onClick={() => props.selectedColor(color)}></div>
      ))}
    </div>
  );
}

export default ColorPalette;
