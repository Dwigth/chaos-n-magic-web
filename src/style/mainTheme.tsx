import { createTheme } from "@mui/material/styles";
import "./fonts.css";

export const cnmMenu = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#959e78 ",
      light: "#959e78",
      contrastText: "#f2d1a4",
      dark: "#959e78",
    },
    secondary: {
      main: "#959e78",
      light: "#b6300b",
      contrastText: "#f2d1a4",
      dark: "#c2ce99",
    },
    background: {
      default: "#0c1b0b",
      paper: "rgba(0,0,0,0.38)",
    },
    text: {
      primary: "#f2d1a4",
      secondary: "#f2d1a4",
      disabled: "#f2d1a4",
    },
    divider: "#664421",
    error: {
      main: "#b6300b",
    },
    info: {
      main: "#5a481e",
      contrastText: "#213f3d",
    },
    success: {
      main: "#6bd0c9",
      contrastText: "#5a481e",
    },
  },
  typography: {
    h1: {
      fontFamily: "Sawarabi Mincho",
    },
    h3: {
      fontFamily: "Sawarabi Mincho",
      color: "#f2d1a4",
    },
    h4: {
      fontFamily: "Sawarabi Mincho",
      color: "#f2d1a4",
    },
    fontFamily: ["Oldenburg", "Sawarabi Mincho"].join(","),
  },
});
