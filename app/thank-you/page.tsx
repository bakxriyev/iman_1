"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"

export default function ThankYouPage() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const searchParams = useSearchParams()
  const isPending = searchParams.get("pending") === "true"

  const handleJoinTelegram = () => {
    window.open("https://t.me/+DDhC5mQl1KdkMWQy", "_blank")
    // Redirect back to main page after a short delay
    setTimeout(() => {
      router.push("/")
    }, 500)
  }

  return (
    <div className="min-h-screen relative bg-[#041a2e] flex flex-col items-center justify-center p-4">
      {/* Background with CSS instead of Image component */}
      <div className="absolute inset-0 z-0 bg-sky-950 bg-cover bg-center opacity-80"></div>

      <div className="text-center max-w-2xl z-10 p-10 rounded-2xl bg-[#0a2a4a]/60 backdrop-blur-sm border border-[#4db5ff]/20">
        <div className="w-40 h-40 mx-auto mb-6 relative">
          <Image
            src="/logo.jpg"
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
            className="rounded-full border border-[#4db5ff]/20"
            priority
            sizes="160px"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#4db5ff] mb-6">Tabriklaymiz!</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">Ro&apos;yhatdan o&apos;tganingiz bilan tabriklayman.</p>
        <p className="text-xl md:text-2xl text-white/90 mb-12">
          Oxirgi bosqichni bajaring va yopiq telegram kanalga qo&apos;shiling.
        </p>

        <button
          onClick={handleJoinTelegram}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <div className="relative bg-[#4db5ff] rounded-lg px-8 py-4 flex items-center space-x-3">
            <span className="text-[#041a2e] font-bold text-xl">TELEGRAM KANALGA QO'SHILISH</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-[#041a2e] transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}
