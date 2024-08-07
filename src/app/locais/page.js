"use client"
import React from 'react'




function Places ({address, description, coordinates}) {


  return (

  <div className='my-12 dark:text-light grid grid-cols-2 gap-2 flex-start items-start mx-12 '> 

    
    <div className='col-span-1 flex flex-col justify-end items-end md:col-span-2 mb:order-1 md:items-center'>

        
        <iframe className='rounded-md w-[75%]'
                width="300vw"
                height="350vw"
                style={{border:0}}
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCYuX7treNVSdZuvqYW0eh8T_gqrG62tw4
                &q=${coordinates}`}>
        </iframe>

    </div>


      <div className='mx-2 flex flex-col md:order-1 md:col-span-2 md:items-center my-2'>
        <h1 className='text-2xl font-bold'>
        {address}
        </h1>

        <p className='my-2 inline-block'>
        {description}
        </p>
      </div>
      </div>
  )
}




function Page() {

  return (
    <main className='mt-24 mb-64'>     
        
        <div className='mb-8  text-8xl text-center items-center flex flex-col md:text-4xl dark:text-light '>
            Page de Atendimento
        </div>

        <Places address={'Centro Clínico Regina'} description={"Av. Doutor Maurício Cardoso 833, sala 505- Hamburgo Velho, Novo Hamburgo -  RS"} coordinates={'-29.6792705,-51.1163451'}/>

        
      
    </main>
  )
}

export default Page