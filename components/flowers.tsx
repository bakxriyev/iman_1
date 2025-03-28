"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function FlowerDecorations() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  // These are actual flower image positions with src paths
  // You can replace the src paths with your own flower images
  const flowerImages = [
    {
      top: "5%",
      left: "5%",
      width: 150,
      height: 150,
      delay: 0.3,
      rotate: -15,
      src: "/gul.jpeg",
      alt: "",
    },
    {
      top: "15%",
      right: "5%",
      width: 120,
      height: 120,
      delay: 0.5,
      rotate: 10,
      src: "/images/flower2.png",
      alt: "",
    },
    {
      top: "40%",
      left: "2%",
      width: 180,
      height: 180,
      delay: 0.7,
      rotate: 5,
      src: "/images/flower3.png",
      alt: "Decorative flower 3",
    },
    {
      top: "60%",
      right: "3%",
      width: 160,
      height: 160,
      delay: 0.9,
      rotate: -10,
      src: "/images/flower4.png",
      alt: "Decorative flower 4",
    },
    {
      bottom: "10%",
      left: "10%",
      width: 140,
      height: 140,
      delay: 1.1,
      rotate: 15,
      src: "/images/flower5.png",
      alt: "Decorative flower 5",
    },
    {
      bottom: "20%",
      right: "8%",
      width: 130,
      height: 130,
      delay: 1.3,
      rotate: -5,
      src: "/images/flower6.png",
      alt: "Decorative flower 6",
    },
  ]

  return (
    <>
      {flowerImages.map((flower, index) => (
        <div
          key={index}
          className="absolute z-0 pointer-events-none"
          style={{
            top: flower.top || "auto",
            left: flower.left || "auto",
            right: flower.right || "auto",
            bottom: flower.bottom || "auto",
            transform: animate ? `rotate(${flower.rotate}deg) scale(1)` : `rotate(0deg) scale(0.5)`,
            opacity: animate ? 0.8 : 0,
            transition: `all 1s ease-out ${flower.delay}s`,
          }}
        >
          <div style={{ width: flower.width, height: flower.height, position: "relative" }}>
            <Image src={flower.src || "/placeholder.svg"} alt={flower.alt} fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      ))}
    </>
  )
}

