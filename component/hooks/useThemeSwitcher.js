"use client"
import React, { useEffect, useState } from 'react'



function useThemeSwitcher() {
 
    const [mode, setMode] = useState("")

     useEffect(()=>{
        let userPref = window.localStorage.getItem("theme") 
                if(userPref){
                    setMode(userPref)
                } else {                    
                    setMode("dark")
                }      
       },[])
       useEffect(()=>{   
            if(mode === "dark"){
                window.localStorage.setItem('theme', 'dark')
                document.documentElement.setAttribute('data-theme', 'dark')
            } 
            if(mode === "light"){
                window.localStorage.setItem('theme', 'light')
                document.documentElement.setAttribute('data-theme', 'light')    
            }   
      },[mode])
          
 
 
  return (
   [mode, setMode]
  )

}

export default useThemeSwitcher