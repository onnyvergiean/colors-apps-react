import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";
export default class ColorBox extends Component {
  render() {
    const { background, id } = this.props;
    return (
      <CopyToClipboard text={background}>
        <div className="ColorBox" style={{ background }} key={id}>
          <div className="copy-container">
            <div className="box-content">
              <span>{id}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
