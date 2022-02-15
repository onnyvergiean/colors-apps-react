import React from "react";
import { Link } from "react-router-dom";

import seedColor from "./seedColor";

export default function PaletteList() {
  let palettes = seedColor.map((palette) => (
    <p>
      <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
    </p>
  ));

  return <div>{palettes}</div>;
}
