import { Route, Routes } from "react-router-dom";
import Login from "./Pages/login/login";
import Signup from "./Pages/signup/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
