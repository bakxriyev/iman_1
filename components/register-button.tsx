"use client"

interface RegisterButtonProps {
  onRegister: () => void
}

export default function RegisterButton({ onRegister }: RegisterButtonProps) {
  return (
    <div className="flex justify-center my-10">
      <button onClick={onRegister} className="relative overflow-hidden group">
        <div className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-0 -skew-x-12 bg-pink-500 group-hover:bg-pink-700 group-hover:skew-x-12"></div>
        <div className="absolute inset-0 w-full h-full transition duration-300 ease-out transform skew-x-12 bg-pink-700 group-hover:bg-pink-500 group-hover:-skew-x-12"></div>
        <div className="absolute bottom-0 left-0 hidden w-10 h-20 transition duration-100 ease-out transform -translate-x-8 translate-y-10 bg-pink-600 -rotate-12"></div>
        <div className="absolute bottom-0 right-0 hidden w-10 h-20 transition duration-100 ease-out transform translate-x-10 translate-y-8 bg-pink-400 -rotate-12"></div>
        <div className="relative px-10 py-5 text-white text-2xl font-bold uppercase">RO&apos;YXATDAN O&apos;TISH</div>
      </button>
    </div>
  )
}

