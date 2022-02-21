import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./Styles/MiniPaletteStyles";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColors = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ background: color.color }}
      key={color.name}
    ></div>
  ));
  return (
    <div className={classes.root}>
      <div className={classes.delete}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
        />
      </div>
      <div className={classes.colors}>{miniColors}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
