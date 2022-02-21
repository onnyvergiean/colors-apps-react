import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
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
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
  },
  button: {
    margin: "0 0.5rem !important",
  },
};

export { styles, AppBar };
