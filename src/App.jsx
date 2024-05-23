import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sign from "./pages/Sign/Sign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign/*" element={<Sign />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
