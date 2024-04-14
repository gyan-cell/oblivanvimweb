import Image from 'next/image'
import React from 'react'
import hero from '@/public/nvim.png'
import '@/styles/heropage.scss'
import Link from 'next/link'

const HeroPage = () => {
  return (
    <div className='hero-page' >
      <div className='image'>
        <Image src={hero} alt='hero' objectFit='contain' layout='fill' objectPosition='center' />
      </div>
      <div className='overlay' >
        <div className='button' >
          <button className='' ><Link href={'/docs'} >Get Started</Link></button>
          <button className='' ><Link href={'/install'} >Install</Link></button>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
