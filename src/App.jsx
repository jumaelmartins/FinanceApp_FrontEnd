import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Sign from "./pages/Sign/Sign";
import { UserStorage } from "./context/UserContext";
import ProtectedRouter from "./helper/ProtectedRouter";
import Account from "./pages/User/Account";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient} >
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
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
