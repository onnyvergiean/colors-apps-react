import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./Styles/MiniPaletteStyles";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, handleClick, openDialog, id } =
    props;

  const miniColors = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ background: color.color }}
      key={color.name}
    ></div>
  ));

  const deletePalette = (e) => {
    e.stopPropagation();
    openDialog(id);
  };
  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{ transition: "all 0.3s ease-in-out" }}
        onClick={deletePalette}
      />
      <div className={classes.colors}>{miniColors}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
