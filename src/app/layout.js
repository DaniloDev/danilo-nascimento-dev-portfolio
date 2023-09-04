import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Danilo Nascimento',
  description: 'Portfolio with informations to the Danilo Nascimento',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
       <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
       </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
