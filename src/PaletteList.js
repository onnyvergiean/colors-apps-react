import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import MiniPalette from "./MiniPalette";
import seedColor from "./seedColor";
const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: { display: "flex", width: "100%", justifyContent: "space-between" },
  palette: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
  },
};

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
        </nav>
        <div className={classes.palette}>{palettes}</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
