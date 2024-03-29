import * as React from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./navbar";
import Header from "./header";
import Register from "./register";
import About from "./about";
import Footer from "./footer";

const sections = [
  { title: "Home", url: "#" },
  { title: "About", url: "#about" },
  { title: "Register", url: "#register" },
  { title: "Contact", url: "#contact" },
];

const theme = createTheme();

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ backgroundColor: "#efead7" }}>
        {/* NAVBAR COMPONENT - links to various sections*/}
        <Navbar sections={sections} />

        <main>
          {/* HEADER COMPONENT - image with tagline*/}
          <Header />
          {/* REGISTER COMPONENT - signup/signin for users */}
          <Register />
          <br />
          {/* ABOUT COMPONENT */}
          <About />
          <br />
          {/* FOOTER COMPONENT - contacts */}
          <Footer />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
