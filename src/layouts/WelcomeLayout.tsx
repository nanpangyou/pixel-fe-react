import { animated, useTransition } from "@react-spring/web"
import { type ReactNode, useRef } from "react"
import { useLocation, useOutlet } from "react-router-dom"

export const WelcomeLayout: React.FC = () => {
  const location = useLocation()
  const outlet = useOutlet()
  const map = useRef<Record<string, ReactNode>>({})
  map.current[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === "/welcome/1" ? "translateX(0%)" : "translateX(100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
    config: { duration: 300 },
  })
  return transitions((style, pathname) => (
    <animated.div style={{ textAlign: "center", ...style }}>
      {map.current[pathname]}
    </animated.div>
  ))
}
