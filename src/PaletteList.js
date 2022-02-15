import React from "react";
import { Link } from "react-router-dom";

import MiniPalette from "./MiniPalette";

import seedColor from "./seedColor";

export default function PaletteList() {
  let palettes = seedColor.map((palette) => <MiniPalette {...palette} />);

  return <div>{palettes}</div>;
}
