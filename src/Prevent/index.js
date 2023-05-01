import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import Dashboard from "../pages/Dashboard";
const Prevent = () => {
  const { user } = useUserAuth();
  return user.uid ? <Outlet /> : <Navigate to="/login" />;
};

export default Prevent;
