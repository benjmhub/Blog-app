'use client'

import React from 'react'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

export default function Navbar() {
  return (
    <>
     <div className='fixed flex p-5 w-[100vw] justify-end items-center shadow-md bg-white/30 backdrop-blur-md  z-20'>
          <Navigation/>
          <MobileNavigation/>
      </div> 
    </>
  )
}