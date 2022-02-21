import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Styles/ColorPickerFormStyles";

function ColorPickerForm(props) {
  const [currentColor, setCurrentColor] = useState("teal");
  const [newColorName, setNewColorName] = useState("");

  const { paletteIsFull, addNewColor, colors, classes } = props;
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      colors.every(({ color }) => color !== currentColor)
    );
  }, [colors, currentColor]);

  const handleChangeCompleted = (color) => {
    setCurrentColor(color.hex);
  };
  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: newColorName,
    };
    addNewColor(newColor);
    setNewColorName("");
  };
  return (
    <>
      <ChromePicker
        color={currentColor}
        onChangeComplete={handleChangeCompleted}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextValidator
          value={newColorName}
          placeholder="Color Name"
          variant="filled"
          onChange={(evt) => setNewColorName(evt.target.value)}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name!",
            "Color name already taken",
            "Color already used",
          ]}
          className={classes.colorNameInput}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
          disabled={paletteIsFull}
          className={classes.addColor}
        >
          {paletteIsFull ? "Palette is full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </>
  );
}

export default withStyles(styles)(ColorPickerForm);
