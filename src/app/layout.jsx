import { Poppins, Oswald } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"], // 300 is Light
  variable: "--font-poppins"
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200"], // 200 is Extra Light
  variable: "--font-oswald"
})

export const metadata = {
  title: "Mitch Robertson",
  description: "Entrepreneur, Writer, Speaker",
  icons: {
    icon: [
      {
        url: '/mitch-robertson-co-favicon-1.png',
        sizes: '32x32',
      },
      {
        url: '/mitch-robertson-co-favicon.png',
        sizes: '192x192',
      },
      {
        url: '/mitch-robertson-co-favicon.png',
        sizes: '512x512',
      }
    ],
    apple: {
      url: '/mitch-robertson-co-favicon.png',
      sizes: '180x180',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${oswald.variable} font-sans bg-black text-white`}>{children}</body>
    </html>
  )
}
