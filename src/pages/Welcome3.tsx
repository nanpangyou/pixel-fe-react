import React from "react"
import p from "../assets/icons/welcome-third.svg"

export const Welcome3: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-around h-full">
      <img src={p} alt="" />
      <p className="text-4xl text-center">
        会挣钱
        <br />
        还要会省钱
      </p>
    </div>
  )
}
