import React from 'react'
import NavLinks from './NavLinks'
import Link from 'next/link'

export default function Navigation() {
  return (
    <>
     <div className='flex justify-items items-center'>
      <div className='absolute left-[3%]'>
        <Link href='/'><h1 className='text-2xl font-semibold'>Farhan Khan</h1></Link>
      </div>
      <nav className='md:inline-block xxsm:hidden'>
        <NavLinks/>
      </nav>
    </div> 
    </>
  )
}