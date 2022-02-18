import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import styles from "./Styles/PaletteListStyles";
import MiniPalette from "./MiniPalette";
import seedColor from "./seedColor";

function PaletteList(props) {
  const { classes } = props;
  let palettes = seedColor.map((palette) => (
    <div key={palette.id}>
      <Link to={`palette/${palette.id}`} style={{ textDecoration: "none" }}>
        <MiniPalette {...palette} />
      </Link>
    </div>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create New Palette</Link>
        </nav>
        <div className={classes.palette}>{palettes}</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
