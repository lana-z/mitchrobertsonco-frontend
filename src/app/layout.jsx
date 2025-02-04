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
    icon: '/mitch-robertson-co-favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${oswald.variable} font-sans bg-black text-white`}>{children}</body>
    </html>
  )
}
