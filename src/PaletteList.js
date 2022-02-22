import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import styles from "./Styles/PaletteListStyles";
import MiniPalette from "./MiniPalette";

function PaletteList(props) {
  const { classes, palettes, deletePalette } = props;
  let navigate = useNavigate();
  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };

  let listPalette = palettes.map((palette) => (
    <div key={palette.id}>
      <MiniPalette
        {...palette}
        id={palette.id}
        handleClick={() => goToPalette(palette.id)}
        handleDelete={deletePalette}
      />
    </div>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create New Palette</Link>
        </nav>
        <div className={classes.palette}>{listPalette}</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
