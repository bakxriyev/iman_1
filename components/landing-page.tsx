"use client"

import { useState } from "react"
import Header from "./Header"
import Logo from "./logo"
import EventInfo from "./EventInfo"
import EventBenefits from "./EventBenefits"
import RegisterButton from "./register-button"
import RegistrationModal from "./register-modal"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleRegister = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = async (data: {
    full_name: string
    phone_number: string
    tg_user: string
  }) => {
    console.log("Form submitted:", data)
    setIsModalOpen(false)
    return Promise.resolve()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-200/50 via-transparent to-pink-200/50"></div>

      <div className="relative z-10 container mx-auto px-4 py-6 min-h-screen flex flex-col">
        {/* Header Section */}
        <Header />

        {/* Logo Section with text below */}
        <Logo />

        {/* Event Info Section */}
        <EventInfo />

        {/* Register Button */}
        <RegisterButton onRegister={handleRegister} />

        {/* Event Benefits */}
        <EventBenefits />

        {/* Registration Modal */}
        <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

