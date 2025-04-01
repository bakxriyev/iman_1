import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Dangasalikdan Halos Bo'l - Jonli Vebinar",
  description: "Jonli bepul vebinar davomida dangasalikdan qutilish va maqsadlarga erishish yo'llari",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <head>
        <meta name="facebook-domain-verification" content="peclfz9azue89cqv0to7ghg0pvhquf" />
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1738953033631255');
          fbq('track', 'PageView');
        `}} />
        <noscript>
          <img height="1" width="1" style={{display: "none"}} 
          src="https://www.facebook.com/tr?id=1738953033631255&ev=PageView&noscript=1" />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}
