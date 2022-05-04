import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import firebase from "./firebase";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./home/home";
import Signup from "./register/signup";
import Signin from "./register/signin";
import Dashboard from "./dashboard/dashboard/dashboard";
import Schemes from "./home/schemes";

const App = () => {
  const [user, setUser] = useState("");

  //SETTING THE USER IF HE IS AUTHENTICATED
  const authlistener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authlistener();
  }, []);

  return (
    <>
      {user ? (
        // ROUTES AVAILABLE IF THE USER IS AUTHENTICATED
        <>
          <CssBaseline>
            <BrowserRouter>
              <Routes>
                {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
              </Routes>
            </BrowserRouter>
          </CssBaseline>
        </>
      ) : (
        // ROUTES AVAILABLE IF THE USER IS NOT AUTHENTICATED
        <>
          <CssBaseline>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/signin" element={<Signin />} />
                <Route exact path="/schemes" element={<Schemes />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
              </Routes>
            </BrowserRouter>
          </CssBaseline>
        </>
      )}
    </>
  );
};

export default App;
