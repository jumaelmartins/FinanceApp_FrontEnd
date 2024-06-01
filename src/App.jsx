import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Sign from "./pages/Sign/Sign";
import { UserStorage } from "./context/UserContext";
import ProtectedRouter from "./helper/ProtectedRouter";
import Account from "./pages/User/Account";
import { Modal } from "./components/Modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Navigate to={"/account/dashboard"} />} />
          <Route path="/sign/*" element={<Sign />} />
          <Route
            path="/account/*"
            element={
              <ProtectedRouter>
                <Account />
              </ProtectedRouter>
            }
          />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
