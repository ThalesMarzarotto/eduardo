import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'
import styles from './Education.module.css'



function Details  ({type, time, place, info}) {


  const ref = useRef(null)

  return (

    <li ref={ref} className={styles.my_custom_class}>
           


      <LiIcon reference={ref}/>      
      <div className={styles.roundedWrapper}>
        <div className={styles.rounded}>
        
        </div>
      </div>
        <motion.div         
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type:'spring'}}
        >
            <h3 className='font-bold text-3xl'>{}&nbsp;
                {type}
            </h3>
            <span className='capitalize text-2xl text-dark/75 dark:text-primaryGreen'>
                {time} | {place}
            </span>
            <p className='text-2xl w-full'>
                {info}
            </p>
        </motion.div>


    </li>
  )

}



function Education() {


    const ref = useRef(null);
     const {scrollYProgress} = useScroll(

        {target:ref,
        offset:['start end', 'center center']}
     )



  return (
    <div className='my-64 flex flex-col items-center text-dark dark:text-light'>

    <h2 className='font-bold mb-32 text-8xl  text-center md:text-6xl xs:text-4xl md:mb-6 border-b-[2px] w-[90%]'>Formação Acadêmica</h2>
    <div ref={ref} className='w-[75%] mx-auto relative text-start lg:w-[75%] md:w-full'>

   <motion.div
   style={{scaleY:scrollYProgress}}
   className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
   md:w-[2px] md:left-[30px] xs:left-[20px]'/>


        <ul>

     
  

   
       <Details     
       type='Atuação em Cirurgia Oncológica Digestiva'
       place={"Colégio Brasileiro de Cirurgia Digestiva"}
       time= '2022-2023'

       />  
       <Details     
       type='Membro Titular do Colégio Brasileiro de Cirurgia Digestiva'
       time= '2022'

       />  
    
   
       <Details     
       type='Membro Titular do Colégio Brasileiro de Cirurgiões'
       time= '2022'

       />  
    
   
       <Details     
       type='Título de Especialista em Cirurgia Geral'
       time= '2021'

       />  

     <Details     
       type='Residencia em Cirurgia do Aparelho Digestivo'
       time= ' 2021 - 2023'
       place='Santa Casa de Misericórdia de Porto Alegre - UFCSPA/ISCMPA'

       />

       <Details     
       type='Residência Médica em Cirurgia Geral'
       time= '2005-2007'
       place='Hospital de Clínicas de Passo Fundo, RS'
         

       />
    
     
    
       <Details     
       type='Graduação em Medicina'
       time= '1998-2004'
       place='Universidade Federal do Rio Grande do Sul, Porto Alegre, RS'

       />
    

      </ul>
  

    </div>


  </div>
  )
}


export default Education
