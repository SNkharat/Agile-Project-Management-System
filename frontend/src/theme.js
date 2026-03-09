import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a1a2e",
    },
    secondary: {
      main: "#4f8cff",
    },
    background: {
      default: "#f4f7fb",
      gradient: "linear-gradient(135deg,#dbeafe,#e0f2fe)",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial",
  },

});

export default theme;