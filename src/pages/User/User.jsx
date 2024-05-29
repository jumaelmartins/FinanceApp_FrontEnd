import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Planning from "./Planning/Planning";
import Settings from "./Settings/Settings";

const User = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/planning" element={<Planning />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default User;
