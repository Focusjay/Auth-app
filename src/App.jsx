import { Route, Routes } from "react-router-dom";
import Login from "./Pages/login/login";
import Signup from "./Pages/signup/signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Routes>
        {isLoggedIn ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
