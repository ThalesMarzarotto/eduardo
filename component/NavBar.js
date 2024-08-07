"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { usePathname} from 'next/navigation'
import {TwitterIcon,  InstagramIcon, WhatsAppIcon, LinkedInIcon, SunIcon, MoonIcon}from './Icons'



import {motion} from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className, as}) =>{

    const router = usePathname()
    console.log(router === href);
    
    
    

    return(
        <Link href={href}  className={className + '    relative group'}>
        {title}
        <span className={
            `h-[10px] inline-block bg-dark absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300  ${ router.asPath === href? 'w-full': 'w-0' } dark:bg-light`
        }
        
  
        
        > 
        
        &nbsp;</span>
        </Link>
    )
}



const CustomLinkMobile = ({ href, title, className, toggle}) =>{

    const router = useRouter(); 
   
    const handleClick =()=>{
    toggle()
    router.push(href)
    }

    return(
        <button href={href} className={className + 'relative group my-4 text-light dark:text-dark text-2xl'} onClick={handleClick}>
        {title}
        <span className={
            `      h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${ router.asPath === href? 'w-full': 'w-0' } dark:bg-light`
        }
        
  
        
        > 
        
        &nbsp;</span>
        </button>
    )
}





function NavBar() {


    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen]= useState(false)

    

    const handleClick = () => {
    setIsOpen(!isOpen)
    }

  return (
    <div className='w-full px-32 py-16 font-medium flex items-center dark:text-light justify-between relative z-10 lg:px-16 md:px-12 sm:px-8 text-dark'>
        
    <button className='flex flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen? 'rotate-45 translate-y-1':'-translate-y-0.5 '}`}></span>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen? 'opacity-0':'opacity-1'}`}></span>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
    </button>


    <div className='w-full flex justify-between items-center lg:hidden'>
    <nav>
        <CustomLink href={'/'}  title={'Home'} className='mr-4'/>   
        <CustomLink href={'/locais'}  title={'Locais de Atendimento'} className='mx-4'/> 
        <CustomLink href={'/artigos'} title={'Artigos'} className='ml-4'/> 
     </nav> 
    
   <nav className="flex items-center justify-center flex-wrap mx-4">
        <motion.a 
        href={'https://www.instagram.com/dreduardojorgens/'} 
        target={'blank'}
        className ={'w-6 mx-3'}
        whileHover={{y:-2}} 
        whileTap={{scale:0.9}}>
        <InstagramIcon className='bg-instagram text-light rounded-[5px]'/>       
        </motion.a>
        <motion.a 
        href={'https://api.whatsapp.com/send?phone=555191999640&text=%22Ol%C3%A1,%20gostaria%20de%20saber%20mais%22'} 
        target={'blank'}
        whileHover={{y:-2}} 
        whileTap={{scale:0.9}}
        className ={'w-6 mx-3'}
        >
        <WhatsAppIcon/>
        </motion.a>
      
     

     <button
     onClick={()=> setMode(mode==='light'? "dark": "light")}
     className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode==="light"? 'bg-dark text-light': 'bg-light text-dark'}`}
     
     >
        {(mode==='dark')?
        <SunIcon/> : <MoonIcon/>
    
          }
     </button>
    </nav>


    </div>


    {(isOpen ? 
    
        <motion.div
        initial={{scale:0}}
        animate={{scale:1, opacity:1, x:"-50%", y:"-50%" }}



        className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 dark:text-dark  '>
    <nav className='flex items-center flex-col justify-center'>
        <CustomLinkMobile href={'/'} title={'Home'} className='' toggle={handleClick} />   
        <CustomLinkMobile href={'/locais'} title={'Locais de Atendimento'} className='' toggle={handleClick} /> 
        <CustomLinkMobile href={'/artigos'} title={'Artigos'} className='' toggle={handleClick} /> 
      
     </nav> 
    
   <nav className="flex items-center justify-center flex-wrap mx-4">
   <motion.a 
        href={'https://www.instagram.com/dredujorgens/'} 
        target={'blank'}
        className ={'w-6 mx-3'}
        whileHover={{y:-2}} 
        whileTap={{scale:0.9}}>
        <InstagramIcon className='bg-instagram text-light rounded-[5px]'/>       
        </motion.a>
        <motion.a 
        href={'https://api.whatsapp.com/send?phone=555191999640&text=%22Ol%C3%A1,%20gostaria%20de%20saber%20mais%22'} 
        target={'blank'}
        whileHover={{y:-2}} 
        whileTap={{scale:0.9}}
        className ={'w-6 mx-3 sm:mx-1'}
        >
        <WhatsAppIcon/>
        </motion.a>


     

     <button
     onClick={()=> setMode(mode==='light'? "dark": "light")}
     className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode==="light"? 'bg-dark text-light': 'bg-light text-dark'}`}
     
     >
        {(mode==='dark')?
        <SunIcon/> : <MoonIcon/>
    
          }
     </button>
    </nav>


    </motion.div>

    :
    
    
    null
    
    )}


<div className='absolute left-[48%] top-[25%] top-2 translate-x[-50%]'>    
<Logo/>
</div>
  
    </div>

  )
}

export default NavBar