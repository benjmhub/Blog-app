import React from 'react'
import NavLinks from './NavLinks'

const Navigation = () => {
  return (
    <>
    <div className='flex justify-items items-center'>
      <div className='absolute left-[3%]'>
        <h1 className='text-2xl font-semibold'>Farhan Khan</h1>
      </div>
      <nav className='md:inline-block xxsm:hidden'>
        <NavLinks/>
      </nav>
    </div>
    </>
  )
}

export default Navigation