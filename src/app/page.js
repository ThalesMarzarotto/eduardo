'use client'


import Image from 'next/image'



import profilePic from '../../public/images/profile/main.jpeg'
import profilePic2 from '../../public/images/profile/main2.jpg'


let group1 = '/images/profile/group1.jpg'
let group2 = '/images/profile/group2.jpg'
let group3 = '/images/profile/group3.jpg'
let group4 = '/images/profile/group4.jpg'
let group5 = '/images/profile/group5.jpg'
let group6 = '/images/profile/group6.jpg'
let group7 = '/images/profile/group7.jpg'
let group8 = '/images/profile/group8.jpg'

let group9 = '/images/profile/group9.jpeg'
let group10 = '/images/profile/group10.jpeg'
let group11 = '/images/profile/group11.jpeg'
let group12 = '/images/profile/group12.jpeg'
// let group13 = '/images/profile/group13.jpeg'
// let group14 = '/images/profile/group14.jpeg'
let group15 = '/images/profile/group15.jpeg'
let group16 = '/images/profile/group16.jpeg'


let group17 = '/images/profile/group17.jpeg'
let group18 = '/images/profile/group18.jpeg'
let group19 = '/images/profile/group19.jpeg'
let group20 = '/images/profile/group20.jpeg'
let group21 = '/images/profile/group21.jpeg'
let group22 = '/images/profile/group22.jpeg'
let group23 = '/images/profile/group23.jpeg'
let group24 = '/images/profile/group24.jpeg'
let group25 = '/images/profile/group25.jpeg'
let group26 = '/images/profile/group26.jpeg'
let group27 = '/images/profile/group27.jpeg'
let group28 = '/images/profile/group28.jpeg'
let group29 = '/images/profile/group29.jpeg'
let group30 = '/images/profile/group30.jpeg'
let group31 = '/images/profile/group31.jpg'

let explain1 = '/images/profile/explain1.jpg'
let explain2 = '/images/profile/explain2.jpg'
let explain3 = '/images/profile/explain3.jpg'
let explain4 = '/images/profile/explain4.jpg'
let explain5 = '/images/profile/explain5.jpg'
let explain6 = '/images/profile/explain6.jpg'
let profile8ic2 = '/images/profile/main2.jpg'

import styles from "./Home.module.css"


let arr = [
  
  [group31 ,0,0,true, false], 

  [group8, 0,0,true, false], 
  [group1, 0,0,true, false],
  [group2, 0,0,true, false],
  [group3, 0,0,true, false], 
  [group4, 0,0,true, false],
  [group5, 0,0,true, false],
  [group7, 0,0,true, false],
  [group9, 0,0,true, false], 

  [group11 ,0,0,true, false], 
  [group12 ,0,0,true, false],
  [group15 ,0,0,true, false],
  [group16 ,0,0,true, false],
  [group17 ,0,0,true, false], 
  [group18 ,0,0,true, false], 
  [group19 ,0,0,true, true], 
  [group20 ,0,0,true, true], 
  [group21 ,0,0,true, false],
  [group22 ,0,0,true, false], 
  [group23 ,0,0,true, false], 
  [group24 ,0,0,true, false], 
  [group25 ,0,0,true, false], 
  [group26 ,0,0,true, false], 
  [group27 ,0,0,true, true], 
  [group28 ,0,0,true, false], 
  [group29 ,0,0,true, false], 
  [group30 ,0,0,true, false], 


]


// let group1 = './flower.webm'
// let group2 = 'images/profile/group1.jpg'
// let group3 = 'images/profile/group3.jpg'
// let Image = 'next/image'

// let arr = [   
// //src, //height // width, //fit property, zoom, and how much from the center of the image it should be, //comment, //should be shown like strong scene?,
// [group2, 0,0,true, false,],
// [group1,400 ,500, true, false, "scale" , "translateX", "translate Y"],
// [group3,0 ,0,true, true,], 
// ]






let arr1= [
  
  
  [explain1, 0, true, false],
  [explain2, 0, true, false],
  [explain3, 0, true, false],
  [explain4, 0, true, false],
  [explain5, 0, true, false], 


]






import Link from 'next/link'
import { DrJorgensIcon, LinkArrow } from '../../component/Icons'
import { useEffect, useRef } from 'react'

import Education from '../../component/Education'
import Slider from '../../component/Slider'

 
function sleepms(ms) {
  return new Promise(resolve=>setTimeout(resolve,ms))
}

let neverAgain = false

export default function Home() {




useEffect (()=>{

  let once = false
  let target = document.getElementById("counter")

  const observer = new IntersectionObserver(attention);

 async  function attention () {
      console.log('att');
      
  if (once){
    
    if(!neverAgain) {
       neverAgain = true
        

      let target1 =  document.getElementById("counter_procedures")
      let target2 =  document.getElementById("counter_experience")
      let target3 =  document.getElementById("counter_consults")
      
      
      let x=0
      let y = 0
      let z = 0

      for (let index = 0; index < 10000; index++) {
        
        await sleepms(1)
      


        
        if (y<19){
          y+=1
    
          
          target2.innerText = y
        }

        if (z<1000){
          z+=1
          target1.innerText = z
        
        }
        if
        (x<10000){
          x+=1
          console.log(x);
        target3.innerText = x 
        }
        
      }
      

    }

  }
 once = true 
  }
    // Iniciando a observação
    observer.observe(target)
},[])







  return (
   

<>



  
  <main >

    

  <main className={styles.main} >
    <DrJorgensIcon style={{height:"70vh", width:"98vw"}}/>
  </main>

  <main className={styles.heroSection1} >
         
          <div className={styles.heroImgContainer}>
            <Image
            src={profilePic} width={600} alt="surgeon" 
            priority
            />            
          </div>
          <div className={styles.heroText1}>              
             
            <h2 className={styles.heroTitle1}>
              A Ciência e a Arte da Medicina aplicadas
            </h2>

            <p >
              Como um cirurgião especialista, sou dedicado a transformar os meus anos de estudo e  aprimoramento em segurança e resultados para os meus pacientes, dando a atenção que cada doença merece.
              Acesse a minha seção pessoal abaixo e veja minha expertise.
         

            </p>

          <div className={styles.heroContactWrapper}>
            <Link 
            className={styles.linkWrapper}
            download={true}
            href='/cvt.pdf' target={'_blank'}>
             
             Resumo
            </Link>
          <Link href="mailto:eduardojorgens@gmail.com" className={styles.linkWrapper} target={"_blank"}> 
          Contato
          </Link>
          </div>

   
          </div>
  </main>


<div className={styles.sliderContainer}>

<Slider arr={arr} hash={1}/>



</div>
<div className={styles.sliderContainer}>

<Slider arr={arr1} hash={2}/>



</div>




  <main className={styles.heroSection2}>



    <h2 className={styles.heroTitle2}>
      Um pouco sobre mim
    </h2>
  
       
        
           
            <p className={styles.heroText2}>Olá, meu nome é Eduardo Jorgens, sou médico formado pela Universidade do Rio Grande do Sul em 2004. Sou Cirurgião Geral formado em 2007 pelo Hospital de Clínicas de Passo Fundo - RS e agora em 2023 formei-me Cirurgião do Aparelho Digestivo pela Santa Casa de Misericórdia de Porto Alegre. Meu pai era médico cirurgião geral e desde criança eu fui influenciado e já sonhava com a mesma profissão. Tenho ampla experiência na área médica, com quase 20 anos de atividade profissional, desde atendimento em Emergências, no Pré-Hospitalar, mas principalmente dentro do bloco cirúrgico, realizando e auxiliando em cirurgias. Estou sempre buscando o aprimoramento teórico e prático. Minha visão é entregar a melhor qualidade técnica possível para os pacientes e minimizar ao máximo as taxas de complicações cirúrgicas.
            </p>
            <p className={styles.heroText2}>
            Eu acredito que a cirurgia é sobre resolver problemas e melhorar a qualidade de vida das pessoas, e é nessa área que eu me identifiquei e eu tenho paixão no que faço. Acredito que ter participado de inúmeros procedimentos é algo essencial. Com a prática podemos refinar o que lemos nos livros e nos artigos científicos.
            </p>
            <p className={styles.heroText2}>
              Se estou atendendo ou no centro cirúrgico não importa, meu pensamento é centrado no benefício dos pacientes, sempre estou na busca de colocar minhas habilidades à serviço deles.
            </p>
      

          <div className={styles.heroSe2Img}>

            <div className=''/>                    
              
              <Image src={profilePic2} alt={''} 
              priority
              sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw;'
              />
          
            </div> 
            <div id="counter"> 
              <div className={styles.heroAction}>+
                <span id='counter_procedures'> 
                   
                </span>  
                <h2 >&nbsp;Procedimentos</h2>
              </div>                    
              <div className={styles.heroAction}>+
              <span id='counter_experience'> 
            
                </span>
                <h2 className=' '>&nbsp;Anos de Experiência</h2>
              </div>
              <div className={styles.heroAction}>+
              <span id='counter_consults'> 
                
                </span>
                <h2 className=''> &nbsp;Pacientes Atendidos</h2>
              </div>
            </div>          
   






 {/* <Experience/> */}
 <Education/>



</main>


   


    

     

  </main>



 

    </> 
    
  )
}





