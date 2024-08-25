
"use client"
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';

import JorgensProfile from '../../../../public/images/profile/instaprofile.jpg'
import ThalesProfile from '../../../../public/images/profile/ThalesInsta.jpg'

import articles from './articles.json' assert{type: 'json'}



import styles from "../articles.module.css"

function Page({props}) {

 const [ title, setTitle] = useState("")
 const [ content, setContent] =  useState("")
 const [ coauthor, setCoauthor] = useState("")
 const [ date, setDate] = useState("")
const params = useParams()
  

useEffect(()=>{
   

console.log(params);


    if (params.name){
       
console.log(params.name);

console.log(articles[params.name])

        let article = articles[params.name]
       
console.log(article);

        setTitle( article.title)
        setContent ( article.content )
        setCoauthor (article.coauthor)
        setDate(article.date)

    }
 
  





  },[
    useRouter().query])

  return (



    <div className={styles.articleContainer}>

            <h1 className={styles.articleTitle}>{title}</h1>
            <div className={styles.authorWrapper}>
                                                           
                  
                          <Image src={JorgensProfile} className={styles.autorPic}    
                          />    
                        <div className={styles.autorInfo}>
                          <h1 className=''>Autor</h1>
                          <p className=''>Dr. Eduardo Jorgens</p>
                        </div>

                     
                      
                        {coauthor?
                         <>
                         <a href='https://www.instagram.com/thalesmarzarotto/'>
                      <Image src={ThalesProfile} className={styles.autorPic}    
                      
                      />
                      
                      </a>
                
                        <div className={styles.autorInfo}>
                          <h1 className=''>Peer-review</h1>   
                          <p className=''>Dr. Thales Marzarotto</p>
                        </div>
                        </>
                      :
                      ""
                      
                      
                      }
                    

                                          
                  <div>
                  
                
                </div>

             
  

                <div>{date}</div>
              
             
         
               
            </div>
            
            <div dangerouslySetInnerHTML={{__html:content}} className='w-[80%] items-center my-8' >
            </div>



    </div>
   
  )
}

export default Page