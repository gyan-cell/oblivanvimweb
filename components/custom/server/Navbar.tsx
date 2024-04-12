import { cn } from '@/lib/utils'
import { Orbitron } from 'next/font/google'
import React from 'react'
import NavElements from '../client/NavElements'
const orbitron = Orbitron({ subsets: ['latin'] })
import "@/styles/navbar.scss"
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-white dark:bg-background '  >
      <div className='logo'  >
        <Link href={'/'}  ><h1 className={cn(orbitron.className, "")}  >Oblivian Vim</h1></Link>
      </div>
      <NavElements />
    </nav>
  )
}

export default Navbar
