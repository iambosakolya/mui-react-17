import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};

// Define overrides object to create theme
const overrides = {
  palette: {
    primary: { main: Colors.primary },
    secondary: { main: Colors.secondary },
    text: {
      primary: Colors.black,
      secondary: Colors.dove_gray,
    },
  },
  typography: {
    fontFamily: "monospace",
    h3: {
      fontWeight: "bold",
      color: Colors.primary,
    },
    h4: {
      fontWeight: "bold",
      color: Colors.primary,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.white,
          color: Colors.black,
          height: "100px",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: "space-between",
          height: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: Colors.black,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: Colors.dove_gray,
          "&:hover": {
            color: Colors.primary,
          },
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: Colors.dove_gray,
          "&:hover": {
            color: Colors.primary,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          height: 24,
          backgroundColor: Colors.shaft,
        },
      },
    },
  },    
};


const theme = createTheme(overrides);

export { overrides };
export default theme;
