import React from "react"
import { NavLink } from "react-router-dom"
import { Demo } from "../demo"

export const Welcome1: React.FC = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <Demo></Demo>
      1
      <NavLink to="/welcome/2">下一页</NavLink>
    </div>
  )
}
