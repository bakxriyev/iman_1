"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { full_name: string; phone_number: string; tg_user: string }) => void
}

export default function RegistrationModal({ isOpen, onClose, onSubmit }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    tg_user: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === "phone_number") {
      // For phone number, ensure it starts with +998 and only allow numbers after that
      const phoneNumberWithoutPrefix = value.startsWith("+998") ? value.substring(4) : value
      const numericValue = phoneNumberWithoutPrefix.replace(/\D/g, "")
      setFormData((prev) => ({ ...prev, [name]: `+998${numericValue}` }))
    } else if (name === "tg_user") {
      // For telegram username, ensure it starts with @ and remove any @ from the input value
      const usernameWithoutPrefix = value.startsWith("@") ? value.substring(1) : value
      setFormData((prev) => ({ ...prev, [name]: `@${usernameWithoutPrefix}` }))
    } else {
      // For other fields, just set the value as is
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      // Send data to the backend API
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, formData)

      // Call the onSubmit prop to maintain compatibility with parent component
      await onSubmit(formData)

      // Reset form after successful submission
      setFormData({ full_name: "", phone_number: "", tg_user: "" })

      // Show success message briefly before redirecting
      setMessage("Muvaffaqiyatli ro'yxatdan o'tdingiz!")

      // Redirect to thank you page after successful submission
      setTimeout(() => {
        router.push("/thank-you")
      }, 1000)
    } catch (error) {
      console.error("Registration error:", error)
      setMessage("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 shadow-2xl transform animate-scaleIn">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-pink-900">Ro'yxatdan o'tish</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            ✖
          </button>
        </div>

        {message && (
          <p
            className={`text-center text-lg mb-4 ${message.includes("Muvaffaqiyatli") ? "text-green-600" : "text-red-600"} bg-opacity-20 p-3 rounded-lg`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            placeholder="Ism va familiya"
          />
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">+998</span>
            <input
              name="phone_number"
              value={
                formData.phone_number.startsWith("+998") ? formData.phone_number.substring(4) : formData.phone_number
              }
              onChange={handleChange}
              required
              className="w-full pl-14 px-4 py-3 border-2 border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              placeholder="XX XXX XX XX"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">@</span>
            <input
              name="tg_user"
              value={formData.tg_user.startsWith("@") ? formData.tg_user.substring(1) : formData.tg_user}
              onChange={handleChange}
              required
              className="w-full pl-8 px-4 py-3 border-2 border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              placeholder="username"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-all flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Yuborilmoqda...
              </>
            ) : (
              "Yuborish"
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

