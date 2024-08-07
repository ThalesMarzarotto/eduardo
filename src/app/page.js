'use client'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../../component/Layout'

import profilePic from '../../public/images/profile/main.jpeg'
import profilePic2 from '../../public/images/profile/main2.jpg'


import group1 from '../../public/images/profile/group1.jpg'
import group2 from '../../public/images/profile/group2.jpg'
import group3 from '../../public/images/profile/group3.jpg'
import group4 from '../../public/images/profile/group4.jpg'
import group5 from '../../public/images/profile/group5.jpg'
import group6 from '../../public/images/profile/group6.jpg'
import group7 from '../../public/images/profile/group7.jpg'
import group8 from '../../public/images/profile/group8.jpg'

import group9 from '../../public/images/profile/group9.jpeg'
import group10 from '../../public/images/profile/group10.jpeg'
import group11 from '../../public/images/profile/group11.jpeg'
import group12 from '../../public/images/profile/group12.jpeg'
// import group13 from '../../public/images/profile/group13.jpeg'
// import group14 from '../../public/images/profile/group14.jpeg'
import group15 from '../../public/images/profile/group15.jpeg'
import group16 from '../../public/images/profile/group16.jpeg'


import group17 from '../../public/images/profile/group17.jpeg'
import group18 from '../../public/images/profile/group18.jpeg'
import group19 from '../../public/images/profile/group19.jpeg'
import group20 from '../../public/images/profile/group20.jpeg'
import group21 from '../../public/images/profile/group21.jpeg'
import group22 from '../../public/images/profile/group22.jpeg'
import group23 from '../../public/images/profile/group23.jpeg'
import group24 from '../../public/images/profile/group24.jpeg'
import group25 from '../../public/images/profile/group25.jpeg'
import group26 from '../../public/images/profile/group26.jpeg'
import group27 from '../../public/images/profile/group27.jpeg'
import group28 from '../../public/images/profile/group28.jpeg'
import group29 from '../../public/images/profile/group29.jpeg'
import group30 from '../../public/images/profile/group30.jpeg'
import group31 from '../../public/images/profile/group31.jpg'

import explain1 from '../../public/images/profile/explain1.jpg'
import explain2 from '../../public/images/profile/explain2.jpg'
import explain3 from '../../public/images/profile/explain3.jpg'
import explain4 from '../../public/images/profile/explain4.jpg'
import explain5 from '../../public/images/profile/explain5.jpg'
import explain6 from '../../public/images/profile/explain6.jpg'
import profile8ic2 from '../../public/images/profile/main2.jpg'



let arr = [
  
  [group31 ,'',true], 

  [group8, "Residência na Santa Casa", true], 
  [group1, "", true],
  [group2, "", false],
  [group3, "", false], 
  [group4, "", false],
  [group5, "", false],
  [group7, "Cerimônia de Formatura da Residência em Cirurgia Digestiva - UFCSPA/ISCMPA",false],
  [group9, "", false], 

  [group11 ,'',false], 
  [group12 ,'',false],
  [group15 ,'Foco total!',false],
  [group16 ,'',false],
  [group17 ,'Curso de Cirurgia Robótica Coloproctológica IRCAD/RJ', false], 
  [group18 ,'',false], 
  [group19 ,'',false], 
  [group20 ,'',false], 
  [group21 ,'Cirurgia por vídeo, uma das muitas que realizei',true],
  [group22 ,'',false], 
  [group23 ,'',false], 
  [group24 ,'',false], 
  [group25 ,'',false], 
  [group26 ,'',false], 
  [group27 ,'',false], 
  [group28 ,'',false], 
  [group29 ,'',true], 
  [group30 ,'',true], 


]


let arr1= [
  
  
  [explain1,"Eu crio planejamentos",false],
  [explain2,"antes de procedimentos",false],
  [explain3,"que demandem",false],
  [explain4,"maiores detalhes",false],
  [explain5,"para a sua realização",false], 


]




import AnimatedText from '../../component/AnimatedText'

import Link from 'next/link'
import { DrJorgensIcon, LinkArrow } from '../../component/Icons'
import { useEffect, useRef } from 'react'
import { motionValue, useInView, useMotionValue, useSpring } from 'framer-motion'


import {motion} from 'framer-motion'



import Education from '../../component/Education'
import useThemeSwitcher from '../../component/hooks/useThemeSwitcher'







const Skill =({name, x, y})=>{
  

    return(
   
     <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer absolute py-3 px-6 dark:bg-light dark:text-dark
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 whitespace-nowrap

      '

      
      whileHover={{scale:1.05}}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y, transition:{duration: 1.5}} } 
      
      viewport={{once:true}}
      > 

       <a href={`/artigos/${name}`}>{name} </a>
      </motion.div>
     
    )

}

const AnimatedNumber =({value}) =>{

  const ref = useRef(null)


  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {duration: 3000});
  const isInView = useInView(ref ,{once:true}); 

  

useEffect(()=>{
  if(isInView) {
    motionValue.set(value); 
  }
},
[isInView, value, motionValue])

useEffect(()=>{


    springValue.on("change", (latest)=>{
      console.log(latest)
      if(ref.current && latest.toFixed(0) && latest<=value){
        ref.current.textContent = latest.toFixed(0)
      }
    })
  },[springValue,value])



  return (
    <span ref={ref}>

    </span>
  )
}

  
  



let startX;
let scrollLeft = 0; 
let isDown = true;


export default function Home() {

  const [mode,setMode] = useThemeSwitcher()



  



  useEffect(()=>{ 
    // console.log(window.document)
    // console.log(styles.macrocontainer)
    const slider = document.querySelector(".macrocontainer") 
    console.log(slider, 'slider')
    if (slider !== null){     
      //  console.log('hi')
        slider.addEventListener('mousedown', (e)=>{       
        isDown = true  
        startX = e.pageX         
        scrollLeft = + slider.style.transform.match(/-?\d+/g)  
        
   
  });    
  slider.addEventListener('mouseleave', ()=>{
   isDown= false      
  });
  slider.addEventListener('mouseup', ()=>{
  isDown= false   
  });
  slider.addEventListener('mousemove', (e)=>{
   if(!isDown)return
  e.preventDefault();
    const x = e.pageX
  
    const walk = x - startX;    
    document.querySelector(".macrocontainer").style.transform="translateX("+(scrollLeft + walk) +"px)"      
  });

}} 
  , []); 
  
  
  useEffect(()=>{ 
      const slider = document.querySelector(".macrocontainer")
    
      if (slider === null){
        return
      }
      slider.addEventListener('touchstart', (e)=>{
        isDown = true  
        startX = e.changedTouches[0].pageX           
       try{
         scrollLeft = + slider.style.transform.match(/-?\d+/g)  [0]
       }catch{
        scrollLeft = 0
       }
       
      });    
    slider.addEventListener('touchend', ()=>{
       isDown= false      
    });
    
    slider.addEventListener('touchmove', (e)=>{
     if(!isDown)return
     e.preventDefault();
        const x = e.changedTouches[0].pageX    
        const walk = x - startX;    
        document.querySelector(".macrocontainer").style.transform="translateX("+(scrollLeft + walk) +"px)"      
     });
    }, []);  


  useEffect(()=>{ 
    // console.log(window.document)
    // console.log(styles.macrocontainer)
    const slider = document.querySelector(".macrocontainer2") 
    console.log(slider, 'slider')
    if (slider !== null){     
      //  console.log('hi')
        slider.addEventListener('mousedown', (e)=>{       
        isDown = true  
        startX = e.pageX         
        scrollLeft = + slider.style.transform.match(/-?\d+/g)  
        
   
  });    
  slider.addEventListener('mouseleave', ()=>{
   isDown= false      
  });
  slider.addEventListener('mouseup', ()=>{
  isDown= false   
  });
  slider.addEventListener('mousemove', (e)=>{
   if(!isDown)return
  e.preventDefault();
    const x = e.pageX
  
    const walk = x - startX;    
    document.querySelector(".macrocontainer2").style.transform="translateX("+(scrollLeft + walk) +"px)"      
  });

}} 
  , []); 
  
  
  useEffect(()=>{ 
      const slider = document.querySelector(".macrocontainer2")
    
      if (slider === null){
        return
      }
      slider.addEventListener('touchstart', (e)=>{
        isDown = true  
        startX = e.changedTouches[0].pageX           
       try{
         scrollLeft = + slider.style.transform.match(/-?\d+/g)  [0]
       }catch{
        scrollLeft = 0
       }
       
      });    
    slider.addEventListener('touchend', ()=>{
       isDown= false      
    });
    
    slider.addEventListener('touchmove', (e)=>{
     if(!isDown)return
     e.preventDefault();
        const x = e.changedTouches[0].pageX    
        const walk = x - startX;    
        document.querySelector(".macrocontainer2").style.transform="translateX("+(scrollLeft + walk) +"px)"      
     });
    }, []);  











  return (
   

<>


  <main className='flex items-center text-dark w-full dark:text-light' >
    <DrJorgensIcon className={'w-[100vw] h-[70vh]'}/>
  </main>

  <main className='flex items-center text-dark w-full min-h-screen dark:text-light  2xl:audauh' >
      <Layout className='pt-0 md:p-16 sm:pt-8'>

        <div className="flex items-center w-full lg:flex-col">
          <div className='w-1/2 ml-5 lg:w-full md:w-full'>
            <Image
            src={profilePic} width={600} alt="surgeon" className='w-full h-auto lg:inline-block md:inline-block md:w-full '
            priority
            sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw;'
            />            
          </div>
          <div className='ml-8 w-full flex flex-col items-center self-center lg:w-full lg:text-center'>              
              <AnimatedText text={'A Ciência e a Arte da Medicina aplicadas'} className= 'my-4  lg:!text-center text-5xl md:!text-2xl sm:!text-2xl'/>     


            <p className='text-4xl my-4 font-medium xl:!text-2xl  md:!text-1xl '>
              Como um cirurgião especialista, sou dedicado a transformar os meus anos de estudo e  aprimoramento em segurança e resultados para os meus pacientes, dando a atenção que cada doença merece.
              Acesse a minha seção pessoal abaixo e veja minha expertise.
         

            </p>

          <div className='flex items-center self-start mt-2 lg:self-center'>
          <Link 
          className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
          
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:px-4 md:text-base
          '
          download={true}
          href='/cvt.pdf' target={'_blank'}>Resumo
          <LinkArrow className={'w-6 ml-1'}/>
          </Link>
          <Link href="mailto:eduardojorgens@gmail.com" className='ml-4 text-lg font-medium capitalize dark:text-light  underline' target={"_blank"}> 
          Contato
          </Link>
          </div>

   
          </div>
     
        </div>
      </Layout> 
  </main>

  
  <main className='flex items-center flex-col text-dark w-full  dark:text-light  2xl:audauh overflow-hidden' >

    <div className='maindiv '>
        <div className='macrocontainer relative flex flex-row   '>
            {arr.map((x, index)=>{
              return(
             <div  key={index} className={x[2]===true? 'h-[598px] w-[500px] relative' :'h-[598px] w-[350px] relative'}>
                <Image
                src={x[0]} width={350} height={598} alt="surgeon" className='object-cover w-full h-full'
                priority
                sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw;'
                />   

                <div className='absolute w-full bottom-0 bg-black bg-opacity-50'>{x[1]}</div>
             </div>               
         
             
              )
            })}
     
         </div>
     </div>

   <div className='maindiv overflow-hidden mt-[250px]'>
    
        <div className='macrocontainer2 relative flex flex-row text-lig w-[100%] flex flex-row'>

        <div   className= 'group h-[598px] w-[250px] relative text-2xl  dark:text-light text-end p-2'>
          A seguir alguns desenhos mostrando o plano cirúrgico que eu costumo fazer antes iniar algum procedimento complexo. Esses desenhos são feitos no quadro da sala cirúrgica e complementam o estudo e o planejamento cirúrgico que é realizado com mais antecedência
        </div>       

            {arr1.map((x, index)=>{
              return(
                <div key={index} className={x[2]===true? 'group h-[598px] w-[500px] relative' :'group h-[598px] w-[350px] relative'}>
                <Image 
                src={x[0]} width={350} height={598} alt="surgeon" className='object-cover w-full h-full'
                priority
                sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw;'
                />   

                <div className='absolute top-0 min-h-[100%] flex flex-col justify-end  h-auto text-[24px]' >
                  <div className=' w-full b-0 h-0 overflow-hidden group-hover:h-[100%] bg-black bg-opacity-50'>
                    {x[1]}
                  </div>
   
                </div>
             </div>               
              )
            })}
     
         </div>
     </div> 
         
     

  </main>



    <main className='flex w-full flex-col text-dark items-center justify-center'>

      <Layout className='pt-16 text-center'>
          <AnimatedText text="Um pouco sobre mim" className='mb-20 text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
             
                <div className='col-span-3 flex flex-col items-start justify-start text-start xl:col-span-4 md:order-2 md:col-span-8 '>
                  <h2 className='mb-4 text-6xl font-bold uppercase dark:text-light text-dark/75 text-center'>
                    Biografia
                  </h2>
                  <p className=' md:text-3xl lg:!text-size-xs dark:text-light '>Olá, meu nome é Eduardo Jorgens, sou médico formado pela Universidade do Rio Grande do Sul em 2004. Sou Cirurgião Geral formado em 2007 pelo Hospital de Clínicas de Passo Fundo - RS e agora em 2023 formei-me Cirurgião do Aparelho Digestivo pela Santa Casa de Misericórdia de Porto Alegre. Meu pai era médico cirurgião geral e desde criança eu fui influenciado e já sonhava com a mesma profissão. Tenho ampla experiência na área médica, com quase 20 anos de atividade profissional, desde atendimento em Emergências, no Pré-Hospitalar, mas principalmente dentro do bloco cirúrgico, realizando e auxiliando em cirurgias. Estou sempre buscando o aprimoramento teórico e prático. Minha visão é entregar a melhor qualidade técnica possível para os pacientes e minimizar ao máximo as taxas de complicações cirúrgicas.
                  </p>
                  <p className='my-4  md:text-3xl dark:text-light '>
                  Eu acredito que a cirurgia é sobre resolver problemas e melhorar a qualidade de vida das pessoas, e é nessa área que eu me identifiquei e eu tenho paixão no que faço. Acredito que ter participado de inúmeros procedimentos é algo essencial. Com a prática podemos refinar o que lemos nos livros e nos artigos científicos.
                  </p>
                  <p className=' md:text-3xl dark:text-light '>
                    Se estou atendendo ou no centro cirúrgico não importa, meu pensamento é centrado no benefício dos pacientes, sempre estou na busca de colocar minhas habilidades à serviço deles.
                  </p>
                </div>


                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light  dark:border-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8'>

                  <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light  '/>                    
                    
                    <Image src={profilePic2} alt={''} className=' w-[100%]'
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw;'
                    />
                
          </div> 
                  <div className='col-span-2 flex flex-col  justify-between xl:col-span-8 xl:flex-row md:order-3 md:col-span-8'> 
                    <div className='flex flex-col justify-center my-20 xl:items-center sm:justify-start sm:!my-0'>
                      <span className='inline-block text-7xl text-dark font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'> +
                        <AnimatedNumber value={1000}/> 
                      </span>
                      <h2 className= 'text-xl font-medium capitalize text-dark  dark:text-light xl:text-center md:-h[50px] sm:text-base xs:text-sm'>Procedimentos</h2>
                    </div>                    
                    <div className='flex flex-col items-center justify-center text-dark my-20 dark:text-light sm:!justify-start sm:!my-0'>
                      <span className = 'inline-block  text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>+
                        <AnimatedNumber value={19} />
                      </span>
                      <h2 className='text-xl font-medium text-dark/75 dark:text-light text-dark xl:text-center xl:text-center md:-h[50px] sm:text-base xs:text-sm '>Anos de Experiência</h2>
                    </div>
                    <div className='flex flex-col items-center justify-center my-20 dark:text-light  text-dark sm:justify-start sm:my-0'>
                      <span className = ' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>+
                        <AnimatedNumber value={10000} />
                      </span>
                      <h2 className='text-xl font-medium text-dark/75 dark:text-light xl:text-center xl:text-center md:-h[50px] sm:text-base xs:text-sm'>Pacientes Atendidos</h2>
                    </div>
                  </div>          
                </div>




  </Layout>
     <h2 className='font-bold text-8xl mt-64 w-full text-center  dark:text-light md:text-5xl md:mt-32'>
       Habilidades
     </h2>

      <div className={`relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark h-[100vw] w-[100vw]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      
      `} >

          <motion.div
          whileHover={{scale: 1.05}}
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6  shadow-dark cursor-pointer dark:text-dark dark:bg-circularLight lg:p-6 md:p-4 xs:text-xs xs:p-2'
          >Cirurgias
          
          </motion.div>

          <Skill name={"Colecistectomia"} x='0vw' y='-45vw '/>          
          <Skill name={"Cirurgia Minimamente Invasiva Avançada"} x='0vw' y='-34vw'/>
          <Skill name={"Hérnias Complexas de Parede"} x='0vw' y='-23vw'/>          
          <Skill name={"Tratamento Cirúrgico do Refluxo Gastroesofágico"} x='5vw' y='-12vw'/>
          <Skill name={"Câncer de Esôfago"} x='-22vw' y='0vw'/>
          <Skill name={"Câncer de Estômago"} x='24vw' y='0vw'/>
          <Skill name={"Neoplasias do Trato Digestivo"} x='0vw' y='12vw'/>    
 
          {/* <Skill name={"Tumores de Fígado"} x='0vw' y='56vw'/>       */}
          <Skill name={"Câncer do Intestino Grosso"} x='0vw' y='24vw'/>    
          {/* <Skill name={"Tratamento do Megaesôfago"} x='12vw' y='36vw'/>    */}
          {/* <Skill name={"Tumores de Pâncreas"} x='-14vw' y='46vw'/>       */}



      </div>
        
       {/* <Experience/> */}
       <Education/>
    


    </main>

    </> 
    
  )
}
