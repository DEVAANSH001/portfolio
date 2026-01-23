"use client"

import { useEffect, useState } from "react"
import { Pointer } from "@/components/ui/pointer"

export default function PointerOnlyDesktop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)")
    setShow(media.matches)

    const handler = (e: MediaQueryListEvent) => setShow(e.matches)
    media.addEventListener("change", handler)

    return () => media.removeEventListener("change", handler)
  }, [])

  if (!show) return null
  return <Pointer />
}
