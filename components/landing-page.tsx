"use client"

import { useState } from "react"
import Image from "next/image"
import { useToast } from "../hooks/use_toast"
import RegistrationModal from "./register-modal"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleRegister = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = async (data: {
    full_name: string
    phone_number: string
    tg_user: string
  }) => {
    // Close the modal immediately
    setIsModalOpen(false)

    // Show toast and redirect immediately to thank-you page
    toast({
      title: "Muvaffaqiyatli ro'yxatdan o'tdingiz!",
      description: "Ma'lumotlaringiz yuborilmoqda...",
      duration: 3000,
    })

    // Redirect immediately without waiting for API response
    router.push("/thank-you?pending=true")

    // Send data to backend in the background after redirect
    try {
      // This will run in the background after the page transition
      axios.post(`${process.env.NEXT_PUBLIC_API_URL || "/api"}/users`, data).catch((error) => {
        console.error("Background submission error:", error)
      })
    } catch (error) {
      console.error("Registration error:", error)
    }

    return Promise.resolve()
  }

  return (
    <div className="min-h-screen relative bg-[#041a2e] overflow-hidden">
      {/* Background image with bokeh effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header with date and time */}
        <header className="flex justify-between items-center mb-8 mt-4">
          <div className="flex items-center space-x-2 bg-[#0a2a4a]/60 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#4db5ff]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span className="text-white/90 font-medium">17-18 APREL</span>
          </div>

          <div className="flex items-center space-x-2 bg-[#0a2a4a]/60 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#4db5ff]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-white/90 font-medium">20:00</span>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center">
          {/* Logo and title */}
          <div className="text-center mb-12">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                className="object-contain rounded-full border border-[#4db5ff]/20"
                priority
              />
            </div>

            <div className="inline-block mb-2 px-4 py-2 bg-[#0a2a4a]/60 backdrop-blur-sm rounded-full">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white font-bold">BEPUL VEBINAR</span>
                <span className="bg-[#4db5ff]/20 text-[#4db5ff] px-2 py-0.5 text-xs font-bold rounded-md">LIVE</span>
              </div>
            </div>

              <h1 className="text-xl md:text-3xl font-bold mb-2 text-white">
                Iman Akhmedovnadan 2 kunlik Bepul Vebinar
              </h1>
            <div className="mt-4 bg-[#0a2a4a]/60 backdrop-blur-sm p-6 rounded-2xl border border-[#4db5ff]/20">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                "21 kunda Intizomni Shakllantirishning Samarali 5 Usuli"
              </h1>
            </div>
          </div>

          {/* Registration button */}
          <div className="flex justify-center my-10">
            <button onClick={handleRegister} className="relative">
              <div className="relative bg-[#4db5ff] rounded-lg px-8 py-4 flex items-center space-x-3">
                <span className="text-[#041a2e] font-bold text-xl">ISHTIROK ETISH</span>
                <div className="bg-[#041a2e]/20 px-2 py-1 rounded-md text-[#041a2e] text-sm font-bold">BEPUL</div>
              </div>
            </button>
          </div>

          {/* Webinar topics */}
          <div className="w-full max-w-4xl mb-12">
            <div className="bg-[#0a2a4a]/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-[#4db5ff]/20">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">Vebinarda Siz:</h2>

              <ul className="space-y-3">
                {[
                  "Intizomni shakllantirishni duch keladigan to'siqlarni qanday yengish mumkinligini",
                  "Maqsadni to'g'ri qo'yish va unda O'ziga bo'lgan ishonchning o'rni",
                  "Hayotni tartiblagan holda Maqsadlarga erishish usullarini o'rganasiz",
                ].map((topic, index) => (
                  <li key={index} className="flex items-center bg-[#041a2e]/40 p-4 rounded-xl">
                    <div className="mr-4 flex-shrink-0 bg-[#4db5ff]/10 p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#4db5ff]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-white/90 text-lg">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration button */}
            <div className="flex justify-center my-10">
              <button onClick={handleRegister} className="relative">
                <div className="relative bg-[#4db5ff] rounded-lg px-8 py-4 flex items-center space-x-3">
                  <span className="text-[#041a2e] font-bold text-xl">ISHTIROK ETISH</span>
                  <div className="bg-[#041a2e]/20 px-2 py-1 rounded-md text-[#041a2e] text-sm font-bold">BEPUL</div>
                </div>
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-white/50 py-4">
          <p>© 2025 Jonli Vebinar. Barcha huquqlar himoyalangan.</p>
        </footer>
      </div>

      {/* Registration Modal */}
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
    </div>
  )
}
