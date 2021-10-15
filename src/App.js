import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";

const themeUi = createTheme({
  palette: {
    primary: {
      main: "#f91944",
      light: "#f91944bf",
    },
    secondary: {
      main: "#cecece",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeUi}>
      <Header></Header>
    </ThemeProvider>
  );
}

export default App;
