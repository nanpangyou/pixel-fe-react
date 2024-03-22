import { animated, useTransition } from "@react-spring/web"
import { type ReactNode, useRef, useState } from "react"
import { Link, useLocation, useOutlet } from "react-router-dom"
import logo from "../assets/icons/logo.svg"

const routeMap: Record<string, string> = {
  "/welcome/1": "/welcome/2",
  "/welcome/2": "/welcome/3",
  "/welcome/3": "/welcome/4",
  "/welcome/4": "/welcome/xxx",
}

export const WelcomeLayout: React.FC = () => {
  const location = useLocation()
  const outlet = useOutlet()
  const map = useRef<Record<string, ReactNode>>({})
  const [extraStyle, setExtraStyle] = useState({})
  map.current[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === "/welcome/1" ? "translateX(0%)" : "translateX(100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
    config: { duration: 300 },
    onStart: () => {
      setExtraStyle({ position: "absolute" })
    },
    onRest: () => {
      setExtraStyle({ position: "relative" })
    },
  })
  return (
    <div className="flex flex-col bg-gradient-to-b from-[var(--welcome-background-color-top)] to-[var(--welcome-background-color-bottom)] h-screen">
      <header className="flex-shrink-0">
        <div className="text-center">
          <img src={logo} alt="logo" className="w-[8em] h-[8em] mx-auto" />
          <h1 className="mx-auto text-4xl w-[5em] font-400 decoration-[var(--basic-font-color)] underline underline-offset-8 decoration-4 text-[#ffebcd] flex justify-around">
            <span>金</span>
            <span>库</span>
          </h1>
        </div>
      </header>
      <main className="grow flex-shrink-[1] flex justify-center relative">
        {transitions((style, pathname) => (
          <animated.div style={{ ...style, ...extraStyle }} className="h-full w-full px-[45px] py-[24px] mx-auto">
            <div className="h-full bg-white rounded-2xl">
              {map.current[pathname]}
            </div>
          </animated.div>
        ))}
      </main>
      <footer className="flex-shrink-0 grid grid-cols-3 grid-rows-1 gap-x-0 gap-y-0 text-center text-2xl text-[#ffebcd] my-4">
        <div style={{ gridArea: "1 / 2 / 2 / 3" }}>
          <Link to={routeMap[location.pathname]}>下一页</Link>
        </div>
        <span style={{ gridArea: "1 / 3 / 2 / 4" }}>
          <Link to="/welcome/xxx">跳过</Link>
        </span>
      </footer>
    </div>
  )
}
