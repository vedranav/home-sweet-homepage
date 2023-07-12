import React from "react";
import ResponsiveAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";
import Content from "./components/Content";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ResponsiveAppBar />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
