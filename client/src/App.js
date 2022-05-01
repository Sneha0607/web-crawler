import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Home from "./home/home";

const App = () => {
  return (
    <>
      {/* <CssBaseline>
        <Router>
          <Routes>
            <Route path="/" component={Home} />
          </Routes>
        </Router>
      </CssBaseline> */}
      <Home/>
    </>
  );
};

export default App;
