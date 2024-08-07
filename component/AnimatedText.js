import React from 'react'
import {motion} from 'framer-motion'

const quote = {
    initial: {
        opacity: 1
    }, 
    animate:{
        opacity: 1, 
        transition: {
            delay: 0.5, 
            staggerChildren: 0.08,
        }
    }
}



const signalWord= {
    initial: {
        opacity: 0, 
        y:50,
    }, 
    animate:{
        opacity: 1, 
        y:0,
        transition: {
            duration: 0.5 
        }
    }
}



function AnimatedText({text, className=''}) {

  return (
    <div className='w-full mx-auto py-2 flex items-center justify-start overflow-hidden dark:text-light sm:py-0'>
        <motion.h1 
        variants={quote}
        initial='initial'
        animate='animate'
        className={'w-full text-dark font-bold dark:text-light break-words  ' +  className}>
            {text.split(" ").map((word,index)=>
                <motion.span key={index} className='inline-block break-words'
                variants={signalWord}             
                >
                    {word}&nbsp;
                </motion.span>
            )}
        </motion.h1>
    </div>
  )
}

export default AnimatedText