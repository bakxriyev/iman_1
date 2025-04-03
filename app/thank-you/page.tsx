"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Fireworks from "@/components/fireworks"

export default function ThankYouPage() {
  const router = useRouter()

  const handleJoinTelegram = () => {
    // Replace with your actual Telegram channel URL
    window.open("https://t.me/+q-fZYo56x7FjMTEy", "_blank")
    // Redirect back to main page after a short delay
    setTimeout(() => {
      router.push("/")
    }, 1000)
  }

  // Simplified flower images with fewer decorations
  const flowerImages = [
    { top: "10%", left: "10%", width: 120, height: 120, src: "/gulchaa.jpg", alt: "Flower decoration" },
    { bottom: "20%", right: "10%", width: 150, height: 150, src: "/gulchaa.jpg", alt: "Flower decoration" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Include the Fireworks component directly */}
      <Fireworks />

      {/* Flower decorations - reduced number */}
      {flowerImages.map((flower, index) => (
        <div
          key={index}
          className="absolute z-0 pointer-events-none"
          style={{
            top: flower.top || "auto",
            left: flower.left || "auto",
            right: flower.right || "auto",
            bottom: flower.bottom || "auto",
          }}
        >
          <div style={{ width: flower.width, height: flower.height, position: "relative" }}>
            <Image
              src={flower.src || "/gulchaa.jpg"}
              alt={flower.alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 150px"
            />
          </div>
        </div>
      ))}

      <div className="text-center max-w-2xl z-10 bg-white/30 backdrop-blur-sm p-10 rounded-2xl shadow-xl">
        <div className="w-40 h-40 mx-auto mb-6 relative">
          <Image src="/logo.jpg" alt="Logo" fill style={{ objectFit: "contain" }} sizes="160px" priority />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-pink-900 mb-6">Tabriklaymiz!</h1>
        <p className="text-xl md:text-2xl text-pink-800 mb-8">Ro&apos;yhatdan o&apos;tganingiz bilan tabriklayman.</p>
        <p className="text-xl md:text-2xl text-pink-800 mb-12">
          Oxirgi bosqichni bajaring va yopiq telegram kanalga qo&apos;shiling.
        </p>
        <button
          onClick={handleJoinTelegram}
          className="bg-pink-600 hover:bg-pink-700 text-white text-2xl font-bold uppercase px-10 py-5 rounded-lg shadow-lg"
        >
          Telegram kanalga qo&apos;shilish
        </button>
      </div>
    </div>
  )
}

