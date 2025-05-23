import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "@/components/toast"

export const metadata: Metadata = {
  title: "Jonli Vebinar - 21 kunda Intizomni Shakllantirishning Samarali 5 Usuli",
  description: "Iman Akhmedovnadan 2 kunlik Bepul Vebinar",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <head>
      </head>
      <body>  
        {children}
        <Toaster />
      </body>
    </html>
  )
}
