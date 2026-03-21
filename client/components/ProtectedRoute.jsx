
// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  console.log("inside protected route token : ",token);
  if (!token) {
    return <Navigate to="/login" /> // ✅ seedha login pe — no flash
  }

  return children // ✅ token hai toh component render karo
}