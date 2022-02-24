import React, { useState } from "react";
import Slider from "rc-slider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import "rc-slider/assets/index.css";
import styles from "./Styles/NavbarStyles";

function Navbar(props) {
  const [format, setFormat] = useState("hex");
  const [open, setOpen] = useState(false);
  const { level, changeLevel, showingAllColors, classes } = props;

  const handleFormatChange = (evt) => {
    setFormat(evt.target.value);
    setOpen(true);
    props.handleChange(evt.target.value);
  };
  const closeSnackbar = () => {
    setOpen(false);
  };
  return (
    <div className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">reactcolorpicker</Link>
      </div>
      {showingAllColors && (
        <div>
          <span>level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      )}
      <div className={classes.SelectContainer}>
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #1234F</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed to {format.toUpperCase()}</span>
        }
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={closeSnackbar}
        action={[
          <IconButton color="inherit" onClick={closeSnackbar}>
            <CloseIcon key="close" aria-label="close" />
          </IconButton>,
        ]}
      />
    </div>
  );
}

export default withStyles(styles)(Navbar);
