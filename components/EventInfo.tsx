"use client"

export default function EventInfo() {
  const topics = [
    "Nega Maqsadlarga erishish QIYINDEK tuyiladi?",
    "O'ziga bo'lgan ishonch Muvaffaqiyat kaliti",
    "Dangasalikning kelib chiqish sabablari?",
    "Intizomga qanday qilib erishish mumkin?",
    "Maqsad yo'lida Fail bo`lishning asl sabablari",
  ]

  return (
    <>
      <div className="flex justify-center mb-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-white bg-pink-500 px-10 py-6 rounded-full shadow-lg text-center">
          JONLI BEPUL VEBINAR DAVOMIDA QUYIDAGILAR HAQIDA GAPLASHAMIZ:
        </h2>
      </div>
      <div className="mb-10">
        <ul className="space-y-4">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start bg-white/40 p-5 rounded-xl shadow-md">
              <div className="mr-4 mt-1 text-pink-600 bg-pink-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span className="text-pink-900 text-lg md:text-xl font-medium">{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

