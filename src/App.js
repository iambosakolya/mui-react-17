import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Images from "./components/Images";
import BottomNav from "./components/BottomNav/BottomNav";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/index";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
      <Banner />
      <Images />
      <BottomNav />
      <Footer />
    </>
  );
}

export default App;
