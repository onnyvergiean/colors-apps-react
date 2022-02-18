import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import styles from "./Styles/PaletteStyles";
import { generatePalette } from "./colorHelper";
import ColorBox from "./ColorBox";
import seedColor from "./seedColor";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

function SingleColorPalette(props) {
  const [format, setFormat] = useState("hex");
  const { id, colorId } = useParams();
  const { classes } = props;
  const findPalette = (id) => {
    return seedColor.find((palette) => {
      return palette.id === id;
    });
  };
  let palettes = generatePalette(findPalette(id));
  const { paletteName, emoji } = palettes;
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
  const changeFormat = (val) => {
    setFormat(val);
  };
  const _shades = gatherShades(palettes, colorId);
  const colorBoxes = _shades.map((color) => (
    <ColorBox
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
      key={color.name}
      id={color.id}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}/`} style={{ textDecoration: "none" }}>
            GO BACK
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(SingleColorPalette);
