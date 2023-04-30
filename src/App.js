import Login from "./pages/Login/Login";
import "./App.css";
import Signup from "./pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-full bg-white">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
