import React, { useState } from "react";
import ResponsiveAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Intro from "./components/Intro";
import Publications from "./components/Publications";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [activePage, setActivePage] = useState("");

  function handleActivePage(page: string) {
    setActivePage(page);
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <ResponsiveAppBar onMenuButtonClick={handleActivePage} />
          <div
            style={{
              paddingTop: "68px",
              paddingLeft: "40px",
              paddingRight: "40px",
              paddingBottom: "20px",
              maxWidth: "1300px",
              flex: "1 0 auto",
            }}
          >
            {activePage === "Publications" ? <Publications /> : <Intro />}
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
