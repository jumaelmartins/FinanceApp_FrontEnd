import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sign from "./pages/Sign/Sign";
import { UserStorage } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/sign/*" element={<Sign />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
