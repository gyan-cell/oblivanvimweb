"use client"

import { ModeToggle } from '@/components/ui/DarkMode'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavElements = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div className={open ? 'nav-elements navActive bg-background' : 'nav-elements'} >
        <Link href={'/'}  >Home</Link>
        <Link href={'/about'} >About</Link>
        <Link href={'/about'} >Docs</Link>
        <Link href={'#features'}  >Features</Link>
        <Link href={'#contribute'}  >Contribute</Link>
        <ModeToggle />
      </div>
      <div onClick={() => setOpen(!open)} className='mob'  >
        {
          open ? <Button variant="outline" size="icon" ><X /></Button> : <Button variant="outline" size="icon" ><Menu /></Button>
        }
      </div>
    </div>
  )
}

export default NavElements
