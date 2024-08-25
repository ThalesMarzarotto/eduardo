
import Image from 'next/image';
import React from 'react';

import JorgensProfile from '../../../../public/images/profile/instaprofile.jpg'
import ThalesProfile from '../../../../public/images/profile/ThalesInsta.jpg'

import articles from './articles.json' assert{type: 'json'}



import styles from "../articles.module.css"
export async function generateStaticParams() {
  const posts = articles
  


    
let arr = []
for (const [key, value] of Object.entries(posts)) {
 
 arr.push([key, value])
  
}  



  return arr.map ((row)=>(
 {
   slug:row[0],
   
  }
  
 ))
}



function Posts({params}) {

const title = articles[params.slug].title
const date = articles[params.slug].date
const content = articles[params.slug].content
const coauthor= articles[params.slug].coauthor

const markUp = { __html:content }


  console.log(params, "params");
  
//  const [ title, setTitle] = useState("")
//  const [ content, setContent] =  useState("")
//  const [ coauthor, setCoauthor] = useState("")
//  const [ date, setDate] = useState("")
// const params = useParams()
  

// useEffect(()=>{
   




//     if (params.name){
       


//         let article = articles[params.name]
       

//         setTitle( article.title)
//         setContent ( article.content )
//         setCoauthor (article.coauthor)
//         setDate(article.date)

//     }
 
  





//   },[
//     useRouter().query])

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
            
            <div dangerouslySetInnerHTML={markUp} className={styles.textContent} >
            </div>



    </div>
   
  )
}

export default Posts