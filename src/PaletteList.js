import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./Styles/PaletteListStyles";
import MiniPalette from "./MiniPalette";

function PaletteList(props) {
  const { classes, palettes, deletePalette } = props;
  let navigate = useNavigate();
  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">Create New Palette</Link>
        </nav>
        <TransitionGroup className={classes.palette}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                {...palette}
                id={palette.id}
                handleClick={() => goToPalette(palette.id)}
                handleDelete={deletePalette}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
