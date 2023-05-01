import Login from "./pages/Login/Login";
import "./App.css";
import Signup from "./pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Prevent from "./Prevent";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="h-screen w-full bg-white">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Prevent />}>
          <Route exact path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
