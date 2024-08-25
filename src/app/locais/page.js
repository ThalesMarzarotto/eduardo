"use client"
import React from 'react'

import styles from "./places.module.css"


function Places ({address, description, coordinates}) {


  return (

  <div className={styles.places}> 

    
    <div className={styles.mapWrapper}>

        
        <iframe 
                width="100%"
                height="300px"
                style={{border:0}}
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCYuX7treNVSdZuvqYW0eh8T_gqrG62tw4
                &q=${coordinates}`}>
        </iframe>

 <h1 className={styles.address}>
        {address}
        </h1>  <p className={styles.description}>
        {description}
        </p>
    </div>

    
      </div>
  )
}




function Page() {

  return (
    <main className={styles.main}>     
        
        <div className={styles}>
           Locais de Atendimento
        </div>
        <Places address={'Consultório'} description={"R. São João, 1013 -  Centro, São Leopoldo - RS"} coordinates={'-29.76834057987051, -51.15008944917479'}/>

        <Places address={'Centro Clínico Regina'} description={"Av. Doutor Maurício Cardoso 833, sala 505- Hamburgo Velho, Novo Hamburgo -  RS"} coordinates={'-29.6792705,-51.1163451'}/>
    
        
      
    </main>
  )
}

export default Page