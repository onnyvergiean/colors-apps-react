import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { withStyles } from "@material-ui/core/styles";

import PaletteMetaForm from "./PaletteMetaForm";
const drawerWidth = 400;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
}));

const styles = {
  root: {
    display: "flex",
  },
  navButton: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
  },
  button: {
    margin: "0 0.5rem !important",
  },
};
function PaletteFormNav(props) {
  const [formShowing, setFormShowing] = useState(false);
  const { handleDrawerOpen, open, palettes, handleSubmit, classes } = props;

  const showForm = () => {
    setFormShowing(true);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Create a Palette
          </Typography>
        </Toolbar>
        <div className={classes.navButton}>
          <Link to="/">
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              GO BACK
            </Button>
          </Link>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={showForm}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default withStyles(styles)(PaletteFormNav);
