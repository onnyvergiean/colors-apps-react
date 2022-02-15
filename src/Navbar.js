import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

import "rc-slider/assets/index.css";
import "./Navbar.css";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
  }
  handleFormatChange = (e) => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  };
  closeSnackbar = () => {
    this.setState({ open: false });
  };
  render() {
    const { level, changeLevel } = this.props;
    const { format, open } = this.state;
    return (
      <div className="Navbar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
        </div>
        <div className="slider-container">
          <span>level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
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
            <span id="message-id">
              Format Changed to {format.toUpperCase()}
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton color="inherit">
              <CloseIcon
                onClick={this.closeSnackbar}
                key="close"
                aria-label="close"
              />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}
