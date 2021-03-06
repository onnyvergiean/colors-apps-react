import React, { useState } from "react";
import { generatePalette } from "./colorHelper";
import { useParams } from "react-router-dom";
import { withStyles } from "@mui/styles";

import styles from "./Styles/PaletteStyles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

import PaletteFooter from "./PaletteFooter";

function Palette(props) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const { id } = useParams();

  const changeLevel = (level) => {
    setLevel(level);
  };
  const changeFormat = (val) => {
    setFormat(val);
  };
  const { classes, palettes } = props;
  const findPalette = (id) => {
    return palettes.find((palette) => {
      return palette.id === id;
    });
  };
  let palette = generatePalette(findPalette(id));

  const { colors, paletteName, emoji } = palette;
  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      key={color.name}
      id={color.id}
      name={color.name}
      moreUrl={`/palette/${id}/${color.id}`}
      palette={palette}
      showingFullPalette
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(Palette);
