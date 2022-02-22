import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./Styles/DraggableColorBoxStyles";
const DraggableColorBox = SortableElement((props) => {
  const { color, classes, name, handleClick } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
