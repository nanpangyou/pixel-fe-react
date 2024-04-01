// const {direction}= useSwipe(divRef)

import type { RefObject } from "react"
import { useEffect, useRef, useState } from "react"

interface Config {
  onTouchStart?: (e: TouchEvent) => void
  onTouchMove?: (e: TouchEvent) => void
  onTouchEnd?: (e: TouchEvent) => void
}
export const useSwipe = (divRef: RefObject<HTMLElement>, config?: Config) => {
  const [direction, setDirection] = useState<"" | "left" | "right">("")
  const x = useRef(-1)
  const onTouchStart = (e: TouchEvent) => {
    config?.onTouchStart?.(e)
    x.current = e.touches[0].clientX
  }
  const onTouchMove = (e: TouchEvent) => {
    config?.onTouchMove?.(e)
    const endX = e.touches[0].clientX
    const diff = endX - x.current
	  if (diff > 3)
		  setDirection("right")
	  else if (Math.abs(diff) <= 3)
		  setDirection("")
	  else if (diff < -3)
		  setDirection("left")
  }
  const onTouchEnd = (e: TouchEvent) => {
    config?.onTouchEnd?.(e)
    setDirection("")
  }
  useEffect(() => {
	  if (!divRef.current)
      return
		  divRef.current.addEventListener("touchstart", onTouchStart)
		  divRef.current.addEventListener("touchmove", onTouchMove)
		  divRef.current.addEventListener("touchend", onTouchEnd)

	  return () => {
		  if (!divRef.current)
        return
			  divRef.current.removeEventListener("touchstart", onTouchStart)
			  divRef.current.removeEventListener("touchmove", onTouchMove)
			  divRef.current.removeEventListener("touchend", onTouchEnd)
	  }
  }, [])
  return { direction }
}
