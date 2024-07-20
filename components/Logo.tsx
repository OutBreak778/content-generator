import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"} className='w-full border-b-2 h-20 flex items-center justify-center'>
      <div className="flex items-center justify-center gap-x-3">
        <div>
          <Image loading='lazy' src="/logo.svg" alt='logo' height={45} width={45} className='w-12 h-12'/>
        </div>
        <span className='font-semibold text-[#333333] text-2xl'>OUTBREAK</span>
      </div>
    </Link>
  )
}

export default Logo
