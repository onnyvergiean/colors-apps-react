import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "rc-slider/assets/index.css";
import "./Navbar.css";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
  }
  handleChange = (e) => {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  };
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <div className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
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
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #FFFFF</MenuItem>
            <MenuItem value="rgb">rgb - rgb</MenuItem>
            <MenuItem value="rgba">rgba - rgba</MenuItem>
          </Select>
        </div>
      </div>
    );
  }
}
