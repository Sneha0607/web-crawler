import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Signup from "./register/signup"
import Signin from "./register/signin"
import Schemes from "./schemes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/schemes" element={<Schemes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

{
  /* <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Route> */
}
