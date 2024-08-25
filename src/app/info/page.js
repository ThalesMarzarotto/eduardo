"use client"


import Head from 'next/head'
import React, { useRef } from 'react'
import styles from "./articles.module.css"

import articles from './[name]/articles.json' assert {type:'json'}



const Article = ({img, title, date, link}) =>{

  console.log(link);
  
  return(
    <a href={link}
    
    className={styles.article}>

    {/* <MovingImg title={title} img={img} link={link}/>drdf */}

     <div>
     {title}
     </div>
    <span >{date}</span>
    </a>
  )  
}






function Artigos() {
  return (
  
    <>
    <Head>
        <title>Dr. Eduado Jorgens</title>
        <meta name='description' content='any description'></meta>
    </Head>

    <main className={styles.main}>
    

       
      <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>
       Info
      </h2>
  

      
      { Object.keys(articles).map(
        key=> {
          return (
            <Article  key={key}      
            img={""}            
            title={articles[key].title}       
            date={articles[key].date}
            link={`/info/${key}`}
            />
          )
        }
       )

       }
 
   

    
    
    </main>
    
    </>
  )
}

export default Artigos