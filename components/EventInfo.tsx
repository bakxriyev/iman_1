import { useEffect, useState } from "react";

export default function EventInfo() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const topics = [
    "Nega Maqsadlarga erishish QIYINDEK tuyiladi?",
    "Dangasalikning kelib chiqish sabablari?",
    "Intizomga qanday qilib erishish mumkin?",
    "Maqsad yo'lida Fail bo`lishning asl sabablari"
  ];

  return (
    <>
      <div className="flex justify-center mb-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white bg-pink-500 px-8 py-4 rounded-full shadow-lg text-center">
          BEPUL VEBINAR DAVOMIDA
        </h2>
      </div>
      <div 
        className="mb-10 transform transition-all duration-700"
        style={{ 
          transform: animate ? 'translateY(0)' : 'translateY(30px)',
          opacity: animate ? 1 : 0,
          transitionDelay: '0.5s' 
        }}
      >
        <ul className="space-y-4">
          {topics.map((topic, index) => (
            <li 
              key={index} 
              className="flex items-start bg-white/40 p-5 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:translate-x-1"
              style={{ 
                transitionDelay: `${0.1 * index}s`,
                animation: `fadeSlideIn 0.6s ease-out ${0.3 + index * 0.2}s both`
              }}
            >
              <div className="mr-4 mt-1 text-pink-600 bg-pink-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
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
  );
}