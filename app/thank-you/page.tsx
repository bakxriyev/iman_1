"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Fireworks from "@/components/fireworks"

export default function ThankYouPage() {
  const router = useRouter()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const handleJoinTelegram = () => {
    // Replace with your actual Telegram channel URL
    window.open("https://t.me/your_channel", "_blank")
    // Redirect back to main page after a short delay
    setTimeout(() => {
      router.push("/")
    }, 1000)
  }

  // Flower images for thank you page
  const flowerImages = [
    { top: "10%", left: "10%", width: 120, height: 120, src: "/gulchaa.jpg", alt: "Flower decoration" },
    { bottom: "20%", right: "10%", width: 150, height: 150, src: "/gulchaa.jpg", alt: "Flower decoration" },
    { top: "40%", left: "30%", width: 100, height: 100, src: "/gulchaa.jpg", alt: "Flower decoration" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Include the Fireworks component directly */}
      <Fireworks />

      {/* Flower decorations */}
      {flowerImages.map((flower, index) => (
        <div
          key={index}
          className="absolute z-0 pointer-events-none"
          style={{
            top: flower.top || "auto",
            left: flower.left || "auto",
            right: flower.right || "auto",
            bottom: flower.bottom || "auto",
            animation: `float ${6 + index}s ease-in-out ${index}s infinite`,
          }}
        >
          <div style={{ width: flower.width, height: flower.height, position: "relative" }}>
            <Image src={flower.src || "/gulchaa.jpg"} alt={flower.alt} fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      ))}

      <div
        className="text-center max-w-2xl z-10 bg-white/30 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform transition-all duration-1000 ease-out"
        style={{
          transform: animate ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
          opacity: animate ? 1 : 0,
        }}
      >
        <div className="w-40 h-40 mx-auto mb-6 relative">
          <Image src="/logo.jpg" alt="Logo" fill style={{ objectFit: "contain" }} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-pink-900 mb-6 animate-fadeIn">Tabriklaymiz!</h1>
        <p className="text-xl md:text-2xl text-pink-800 mb-8 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
          Ro&apos;yhatdan o&apos;tganingiz bilan tabriklayman.
        </p>
        <p className="text-xl md:text-2xl text-pink-800 mb-12 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
          Oxirgi bosqichni bajaring va yopiq telegram kanalga qo&apos;shiling.
        </p>
        <button
          onClick={handleJoinTelegram}
          className="relative overflow-hidden group animate-fadeIn"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-0 -skew-x-12 bg-pink-500 group-hover:bg-pink-700 group-hover:skew-x-12"></div>
          <div className="absolute inset-0 w-full h-full transition duration-300 ease-out transform skew-x-12 bg-pink-700 group-hover:bg-pink-500 group-hover:-skew-x-12"></div>
          <div className="relative px-10 py-5 text-white text-2xl font-bold uppercase">
            Telegram kanalga qo&apos;shilish
          </div>
        </button>
      </div>
    </div>
  )
}

