import React, { useState } from "react";
import { generatePalette } from "./colorHelper";
import { useParams } from "react-router-dom";

import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import seedColor from "./seedColor";

import "./Palette.css";

export default function Palette() {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const { id } = useParams();
  const changeLevel = (level) => {
    setLevel({ level });
  };
  const changeFormat = (val) => {
    setFormat({ format: val });
  };

  const findPalette = (id) => {
    return seedColor.find((palette) => {
      return palette.id === id;
    });
  };
  let palette = generatePalette(findPalette(id));
  const { colors, paletteName, emoji } = palette;
  const colorBoxes = colors[level].map((color) => (
    <ColorBox background={color[format]} key={color.name} id={color.name} />
  ));

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <div className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </div>
    </div>
  );
}
