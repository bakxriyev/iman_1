"use client"

interface RegisterButtonProps {
  onRegister: () => void
}

export default function RegisterButton({ onRegister }: RegisterButtonProps) {
  return (
    <div className="flex justify-center my-10">
      <button
        onClick={onRegister}
        className="bg-pink-600 hover:bg-pink-700 text-white text-2xl font-bold uppercase px-10 py-5 rounded-lg shadow-lg"
      >
        RO&apos;YXATDAN O&apos;TISH
      </button>
    </div>
  )
}

