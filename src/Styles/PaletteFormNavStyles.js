import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import sizes from "./sizes";
import { DRAWER_WIDTH } from "../constans";

const drawerWidth = DRAWER_WIDTH;
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
    marginRight: "0.5rem",
    "& a": {
      textDecoration: "none",
    },
    [sizes.down("xs")]: {
      marginRight: "0.5rem !important",
    },
  },

  button: {
    margin: "0 0.5rem !important",
    [sizes.down("xs")]: {
      margin: "0 0.2rem !important",
      padding: "0.4rem !important",
    },
  },
};

export { styles, AppBar };
