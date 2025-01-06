import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'> Hi I'm Marcel Nota 
        <Image src={assets.profile_img} alt='' className='w-6'/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Software Developer 
            based in Mozambique</h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
            Software Engineering Enthusiast with Expertise in Crafting Innovative Solutions
            </p>
            <div>
                <a ref="#contact">Contact me   <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
                <a ref="#contact">My resume   <Image src={assets.download_icon} alt='' className='w-4'/></a>
            </div>
    </div>
  )
}

export default Header
