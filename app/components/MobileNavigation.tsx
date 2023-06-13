import React, { useState } from 'react'
import NavLinks from './NavLinks'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'

export default function MobileNavigation() {
    const [isOpen , setisOpen] = useState(false)

    const HamburgerMenu = <GiHamburgerMenu 
                          color='black' 
                          size='40px' 
                          className='absolute right-[3%] cursor-pointer p-3 h-[50px] w-[50px]' 
                          onClick={()=>setisOpen(!isOpen)}/>
  
    const CloseIcon = <AiOutlineClose 
                      color='black' 
                      size='40px' 
                      className='absolute right-[3%] cursor-pointer z-20 p-3 h-[50px] w-[50px]' 
                      onClick={()=>setisOpen(!isOpen)}/>
  
    return (
      <>
      <div className='flex justify-items items-center my-3'>
        <div className='absolute left-[3%]'>
          <Link href='/'><h1 className='text-2xl font-semibold'>Farhan Khan</h1></Link>
        </div>
        <nav className='md:hidden bg-blue-300 flex items-center'>
          {isOpen ? CloseIcon : HamburgerMenu}
          {isOpen && <NavLinks/>}
        </nav>
        </div>
      </>
    )
}