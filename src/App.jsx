import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Sign from "./pages/Sign/Sign";
import { UserStorage } from "./context/UserContext";
import User from "./pages/User/User";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Navigate to={"/account/dashboard"} />} />
          <Route path="/sign/*" element={<Sign />} />
          <Route path="/account/*" element={<User />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
