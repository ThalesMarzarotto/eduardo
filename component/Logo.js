import Link from 'next/link'
import React from 'react'

import {motion} from 'framer-motion'

const MotionLink = motion(Link);

function Logo() {
  return (
    <div
    className='flex items-center justify-center mt-2' >
     
    <MotionLink href={'/'}
     className={'w-16 h-16 bg-[#133F58] text-light flex items-center justify-center rounded-full border border-solid border-transparent dark:border-light'}
     whileHover={{                
    backgroundColor:["#133F58", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"], 
     transition: {duration:1, repeat: Infinity} 
        
        }}
     
     >

        EJ
    
    </MotionLink>
    </div>
  )
}

export default Logo