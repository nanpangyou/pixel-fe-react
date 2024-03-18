import { animated, useTransition } from "@react-spring/web"
import { type ReactNode, useRef } from "react"
import { Outlet, useLocation } from "react-router-dom"

export const WelcomeLayout: React.FC = () => {
  const pathNames = useLocation()
  const map = useRef<Record<string, ReactNode>>({})
  const transitions = useTransition(pathNames, {
    from: { transform: "translateX(100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
    config: { duration: 3000 },
  })
  return transitions((style, pathname) => (
    <animated.div style={{ textAlign: "center", ...style }}>
      {/* {{ pathname }} */}
      <Outlet />
    </animated.div>
  ))
  // console.log(pathNames)
  // return <Outlet />
}
