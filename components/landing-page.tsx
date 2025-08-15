"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import RegistrationModal from "@/components/register-modal"

export default function LandingPageComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleRegister = () => {
    setIsModalOpen(true)
  }

  const handleModalSubmit = (data: { full_name: string; phone_number: string; tg_user: string }) => {
    console.log("Registration data:", data)
    setIsModalOpen(false)
    router.push("/thank-you")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Date Badge */}
      <div className="flex justify-center pt-8 pb-6">
        <div className="bg-white border-2 border-black rounded-full px-6 py-2">
          <span className="text-black font-bold text-lg">3, 4, 5-SENTABR, 20:00</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-6">
        {/* Bold Headline */}
        <h1 className="text-2xl font-black text-black text-center mb-6 leading-tight">
          DANGASALIKDAN HALOS BO'LISHNING 3 TA YO'LI
        </h1>

        {/* Description */}
        <p className="text-center text-black mb-8 leading-relaxed">
          Jonli Bepul Vebinar davomida quyidagilar haqida gaplashamiz
        </p>

        {/* Photo Section */}
        <div className="relative mb-8">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/photo.jpg"
                alt="Iman Akhmedovna"
                width={280}
                height={350}
                className="rounded-2xl"
                style={{ width: "280px", height: "350px", objectFit: "cover" }}
                priority
              />

              {/* Name overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <h3 className="font-bold text-black text-lg">Iman Akhmedova</h3>
                <p className="text-sm text-gray-700">Oilaviy munosabatlar va bolalar psixologi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Red CTA Button */}
        <div className="mb-8">
          <button
            onClick={handleRegister}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold text-xl py-4 px-6 rounded-2xl transition-colors duration-200"
          >
            BEPUL QATNASHISH &gt;&gt;&gt;
          </button>
        </div>

        {/* Dark Bottom Section */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-center mb-4">JONLI BEPUL VEBINAR DAVOMIDA:</h2>
          <ul className="space-y-3">
            {[
              "Nima uchun dangasalik kasaliga chalinamiz?",
              "Dangasalikni ichki ruhiy sabablari?",
              "Dangasalikni hech kim bilmaydigan eng muhim omili",
              "O'zgarishga harakat qilish, lekin uddalay olmaslikni psixologik omillari",
            ].map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-sm leading-relaxed">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-black text-center mb-4">Bepul Vebinardan qanday foydalar olasiz?</h3>
          <ul className="space-y-3">
            {[
              "Dangasalikdan qutilush uchun eng ishlaydigan texnikalar",
              "Tuganmas energiya holatida yashash siri",
              "Dangasalikdan 1 kunda halos qiladigan 1 ta amal va duo",
              "O'zini prorabotka qilish orqali halovatda yashashni boshlash",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Final CTA */}
        <div className="pb-8">
          <button
            onClick={handleRegister}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold text-xl py-4 px-6 rounded-2xl transition-colors duration-200"
          >
            ISHTIROK ETISH - BEPUL
          </button>
        </div>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
    </div>
  )
}
