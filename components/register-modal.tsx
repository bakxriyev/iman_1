"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { full_name: string; phone_number: string; tg_user: string }) => void
}

export default function RegistrationModal({ isOpen, onClose, onSubmit }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "+998",
    tg_user: "",
  })
  const [loading, setLoading] = useState(false)

  const phoneInputRef = useRef<HTMLInputElement>(null)

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        full_name: "",
        phone_number: "+998",
        tg_user: "",
      })
      setLoading(false)
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Handle phone number prefix
    if (name === "phone_number") {
      if (!value.startsWith("+998")) {
        // If user deletes the prefix, keep it
        setFormData((prev) => ({ ...prev, [name]: "+998" + value.replace("+998", "") }))
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }))
      }
    }
    // Handle other fields normally
    else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  // Handle key press to ensure prefixes can't be deleted
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, prefix: string) => {
    const input = e.currentTarget
    const selectionStart = input.selectionStart || 0

    // Prevent backspace at prefix length position
    if (e.key === "Backspace" && selectionStart <= prefix.length) {
      e.preventDefault()
    }

    // Prevent selection and deletion of prefix
    if (e.key === "a" && e.ctrlKey) {
      e.preventDefault()
      // Select all text except prefix
      setTimeout(() => {
        input.setSelectionRange(prefix.length, input.value.length)
      }, 0)
    }
  }

  // Handle selection to prevent selecting the prefix
  const handleSelect = (e: React.SyntheticEvent<HTMLInputElement>, prefix: string) => {
    const input = e.currentTarget
    const selectionStart = input.selectionStart || 0

    if (selectionStart < prefix.length) {
      setTimeout(() => {
        input.setSelectionRange(prefix.length, input.selectionEnd || prefix.length)
      }, 0)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Submit the form data to parent component immediately
    onSubmit(formData)
  }

  // Focus cursor at the end of the prefilled value when input is focused
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target
    setTimeout(() => {
      input.selectionStart = input.selectionEnd = input.value.length
    }, 0)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-[#041a2e] rounded-2xl p-8 max-w-md w-full mx-4 border border-[#4db5ff]/20 mt-10">
        {/* Banner at the top of the modal */}
        <div className="absolute -top-16 left-0 right-0 bg-gradient-to-r from-[#041a2e] to-[#0a4a8c] text-white py-3 px-4 rounded-t-xl text-center font-bold text-lg shadow-lg">
          Ro'yhatdan o'ting va yopiq telegram kanalga qo'shiling!
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#4db5ff] mb-2">Ro'yxatdan o'tish</h2>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="full_name" className="text-white/80 text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-[#4db5ff]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Ism va familiya
            </label>
            <input
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#0a2a4a]/60 border border-[#4db5ff]/20 rounded-lg focus:ring-2 focus:ring-[#4db5ff]/50 text-white placeholder-white/50"
              placeholder="Ism va familiya"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone_number" className="text-white/80 text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-[#4db5ff]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Telefon raqam
            </label>
            <input
              id="phone_number"
              name="phone_number"
              ref={phoneInputRef}
              value={formData.phone_number}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, "+998")}
              onSelect={(e) => handleSelect(e, "+998")}
              onFocus={handleFocus}
              required
              className="w-full px-4 py-3 bg-[#0a2a4a]/60 border border-[#4db5ff]/20 rounded-lg focus:ring-2 focus:ring-[#4db5ff]/50 text-white placeholder-white/50"
              placeholder="+998 XX XXX XX XX"
            />
          </div>
          <button type="submit" disabled={loading} className="relative w-full">
            <div className="relative bg-[#4db5ff] rounded-lg py-3 px-6 flex items-center justify-center">
              {loading ? (
                <span className="text-[#041a2e] font-bold">Yuborilmoqda...</span>
              ) : (
                <span className="text-[#041a2e] font-bold">Yuborish</span>
              )}
            </div>
          </button>
        </form>
      </div>
    </div>
  )
}
