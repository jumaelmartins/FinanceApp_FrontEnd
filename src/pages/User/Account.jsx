import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Planning from "./Planning/Planning";
import Settings from "./Settings/Settings";
import Lancamentos from "./Lancamentos/Lancamentos";
import { Modal } from "../../components/Modal/Modal";

const Account = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/planning/*" element={<Planning />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/lancamentos" element={<Lancamentos />} />
      </Routes>
    </>
  );
};

export default Account;
