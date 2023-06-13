'use client'

import { useTheme } from "next-themes"

export default function ThemeButton() {

    const {resolvedTheme , setTheme}:any = useTheme()

  return (
    <button onClick={()=>setTheme(resolvedTheme === 'dark'?'light':'dark')}>
      {resolvedTheme === 'dark' ? 'light' : 'dark'}
    </button>
  )
}
