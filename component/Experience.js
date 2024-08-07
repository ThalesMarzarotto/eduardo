import Details from '@/component/Details'
import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import Education from './Education';



function Experience() {


    const ref = useRef(null);
     const {scrollYProgress} = useScroll(

        {target:ref,
        offset:['start end', 'center start']}
     )



  return (
    <div className='my-64 text-dark flex flex-col items-center dark:text-light'>

    <h2 className='border-b-[2px] w-[90%] mx-10  font-bold mb-32 text-8xl  text-center md:text-6xl xs:text-4xl md:mb-6'>Experiência</h2>
    <div ref={ref} className='w-[100%] mx-auto relative text-start lg:w-[75%] md:w-full'>

   <motion.div
   style={{scaleY:scrollYProgress}}
   className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light dark:text-light
   md:w-[2px] md:left-[30px] xs:left-[20px]
   '/>


      <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

      <Details
       position='Unimed Vale dos Sinos' 
       time='2013-Atual'
       address='Novo Hamburgo, RS'
    
     
       />

       <Details
       position='Santa Casa de Misericódia de Porto Alegre' 
       company = 'Santa Casa'
       time='2021-2023'
       address='Porto Alegre, RS'
      work="Residência em Cirurgia do Aparelho Digestivo."            
         
       />


        
      <Details
       position='Hospital São José e Prefeitura' 
       time='2009-2013'
       address='Chapada, RS'
    
     
       />

      <Details
       position='Hospital dos Trabalhadores e Prefeitura' 
       time='2007-2009'
       address='Ronda-Alta, RS'
    
     
       />
        <Details
       position='Hospital de clínicas de Passo Fundo' 
       company = 'HCPF'
       time='2005-2007'
       address='Passo Fundo, RS'
      work="Residência em Cirurgia do Aparelho digestivo."            
    
     
       />
  
 

    

       

     
    

      </ul>
  

    </div>


  </div>
  )
}

export default Experience