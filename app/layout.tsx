'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
// import Provider from './components/Provider'
import {ThemeProvider} from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='darker' lang="en">
      <body className="darker">
        <ThemeProvider>
        <Navbar/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
