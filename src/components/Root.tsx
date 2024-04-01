import React from "react"
import { Navigate } from "react-router-dom"
import { useLocalStore } from "../stores/useDemoStore"

export const Root: React.FC = () => {
  const { hasRead } = useLocalStore()
  if (hasRead) {
    return <Navigate to="/home"></Navigate>
  }
  else {
    return <Navigate to="/welcome/1"></Navigate>
  }
}
