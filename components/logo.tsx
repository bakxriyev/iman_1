"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Logo() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  // Shared style for the serif font
  const serifStyle = {
    color: "#7a1f1f",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontWeight: "580",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mb-24 px-4 text-center">
      {/* Large Logo */}
      <div className="w-full max-w-2xl mx-auto mb-0 transform transition-all duration-1000">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center">
          <Image src="/logo.jpg" alt="Logo" fill className="object-contain" priority />
        </div>
      </div>

      {/* Title */}
      <h2 className="flex items-center justify-center gap-2 mb-4">
        <span className="text-2xl md:text-3xl lg:text-4xl" style={serifStyle}>
          Jonli Vebinar
        </span>
        <span className="bg-red-800 text-white px-3 py-1 text-lg font-bold rounded-md animate-pulse ml-2">
          LIVE
        </span>
      </h2>

      {/* Main Text */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-7xl lg:text-6xl mb-2 leading-tight" style={serifStyle}>
          "Dangasalikni
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-6xl leading-tight" style={serifStyle}>
          Yengishning samarali usullari"
        </h1>
      </div>
    </div>
  )
}
