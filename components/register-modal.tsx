"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

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
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      await onSubmit(formData)
      setFormData({ full_name: "", phone_number: "", tg_user: "" })
      // Redirect to thank you page after successful submission
      router.push("/thank-you")
    } catch (error) {
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

        {message && <p className="text-center text-lg text-red-600">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            placeholder="Ism va familiya"
          />
          <input
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            placeholder="+998 XX XXX XX XX"
          />
          <input
            name="tg_user"
            value={formData.tg_user}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            placeholder="@username"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-all"
          >
            {loading ? "Yuborilmoqda..." : "Yuborish"}
          </button>
        </form>
      </div>
    </div>
  )
}

