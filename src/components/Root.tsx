import React from "react"
import { Navigate, Outlet } from "react-router-dom"

export const Root: React.FC = () => {
  const hasRead = localStorage.getItem("hasRead") === "yes"
  if (hasRead) {
    return <Navigate to="/home"></Navigate>
  }
  else {
    return <Navigate to="/welcome/1"></Navigate>
  }
}
