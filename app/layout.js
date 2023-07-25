import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { ContextProvider } from "../utils/ContextProvider";

export const metadata = {
  title: 'London Dubai 1764',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
      <body className={inter.className}>{children}</body>
      </ContextProvider>
    </html>
  )
}
