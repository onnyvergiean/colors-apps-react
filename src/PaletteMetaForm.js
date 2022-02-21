import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default function PaletteMetaForm(props) {
  const [open, setOpen] = React.useState(true);
  const [newPaletteName, setNewPaletteName] = useState("");
  const { palettes, handleSubmit } = props;
  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
        <DialogContent>
          <DialogContentText>
            Please Enter a name for your new Palette. Make sure it's unique.
          </DialogContentText>
          <TextValidator
            label="Palette Name"
            value={newPaletteName}
            fullWidth
            margin="normal"
            onChange={(evt) => setNewPaletteName(evt.target.value)}
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={[
              "Enter a Palette name!",
              "Palette name already used",
            ]}
          />
        </DialogContent>
      </ValidatorForm>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" type="submit" color="primary">
          Save Palette
        </Button>
      </DialogActions>
    </Dialog>
  );
}
