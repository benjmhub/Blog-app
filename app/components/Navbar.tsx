import React from 'react'
import {AiFillGithub , AiFillDribbbleCircle} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'
import {RiComputerFill} from 'react-icons/ri'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
    <header className="bg-gradient-to-r from-secondary to-primary body-font">
  <div className="container mx-auto flex flex-wrap py-5 px-24 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Link href='/'><span className="ml-3 font-semibold text-3xl">Farhan Khan</span></Link>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <a href='https://github.com/itsfarhankhan28' className="mr-5 text-3xl cursor-pointer"><AiFillGithub/></a>
      <a href='https://dev.to/itsfarhankhan28' className="mr-5 text-3xl cursor-pointer"><FaDev/></a>
      <a href='https://portfolio2-m2jd.vercel.app/' className="mr-5 text-3xl cursor-pointer"><RiComputerFill/></a>
      <a href='https://dribbble.com/itsfarhankhan28' className="mr-5 text-3xl cursor-pointer"><AiFillDribbbleCircle/></a>
    </nav>
  </div>
</header>
    </>
  )
}
