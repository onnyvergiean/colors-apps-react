import React from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./ColorBox";

import { generatePalette } from "./colorHelper";
import seedColor from "./seedColor";
export default function SingleColorPalette() {
  const { id, colorId } = useParams();
  const findPalette = (id) => {
    return seedColor.find((palette) => {
      return palette.id === id;
    });
  };
  let palettes = generatePalette(findPalette(id));
  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };
  const _shades = gatherShades(palettes, colorId);
  const colorBoxes = _shades.map((color) => (
    <ColorBox
      name={color.name}
      background={color.hex}
      showLink={false}
      key={color.name}
      id={color.id}
    />
  ));

  return (
    <div className="Palette">
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}
