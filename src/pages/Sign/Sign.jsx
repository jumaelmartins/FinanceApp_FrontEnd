import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const Sign = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/in" element={<SignIn />} />
      <Route path="/up" element={<SignUp />} />
    </Routes>
  );
};

export default Sign;
