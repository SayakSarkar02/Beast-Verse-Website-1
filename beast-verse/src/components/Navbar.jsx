import React from 'react'
import {motion} from 'framer-motion'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <div className='fixed flex justify-center items-center w-full z-50'>
    <motion.div
    
    initial={{y: -100}}
    animate={{y: 0}}
    transition={{
      duration: 1,
      delay: 7
    }}

    className='bg-gradient-to-br from-black to-slate-800 w-[70%] mt-3 container mx-auto rounded-xl drop-shadow-xl'>
        <div className='p-4 px-5 flex flex-row justify-between items-center max-h-20'>
            <div className='cursor-pointer'>
                <img src={logo} alt="bv_logo" className='w-24' />
            </div>
            <ul className='flex flex-row gap-5 font-Monstserrat font-bold text-blue-400 items-center'>

                <li className='hover:text-blue-300 cursor-pointer'>Home</li>
                <li className='hover:text-blue-300 cursor-pointer'>Marketplace</li>
                <li className='hover:text-blue-300 cursor-pointer'>Buy Eggs</li>
                <li className='hover:text-blue-300 cursor-pointer'>About Us</li>
                <li className='w-[2px] h-8 bg-gray-300'></li>
                <li className='bg-gradient-to-br from-[#6c7aca] to-[#8C9EFF] hover:to-[#8292EA] hover:from-[#6c7aca] text-white py-2 px-5 rounded-full cursor-pointer'><a href="https://discord.gg/JG9VAuJbD7">Join Discord</a></li>
                <li className='bg-gradient-to-br from-green-600 to-lime-400 hover:to-green-600 hover:from-lime-500 text-white py-2 px-5 rounded-full cursor-pointer'>Pre-Register</li>

            </ul>
        </div>
        
    </motion.div>
    </div>
  )
}