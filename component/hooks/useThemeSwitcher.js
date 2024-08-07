import React, { useEffect, useState } from 'react'

function useThemeSwitcher() {


    const preferDarkQuery = "(prefer-color-scheme: dark)"
    const [mode, setMode] = useState("")
    
    let externalControl = false;



useEffect(()=>{

     const mediaQuery = window.matchMedia(preferDarkQuery)   
     const userPref = window.localStorage.getItem("theme"); 
     
   
     const handleChange =() =>{    
        if(userPref){
            let check = ( userPref === "dark"? 'dark': "light")
            console.log("here")
            console.log(check, 'check')
            setMode(check)


            if(check === 'dark'){
                document.documentElement.classList.add("dark")
            }else {
                document.documentElement.classList.remove("dark")
            }
        }else {

            console.log("here2")
            let check = mediaQuery.matches?  'light' : 'dark'
            setMode(check)
            window.localStorage.setItem(
                "theme", check);
            
                if(check==="dark"){
                    document.documentElement.classList.add("dark")

                }else{
                    document.documentElement.classList.remove("dark")
                }

         }
  
    }

     handleChange()
     mediaQuery.addEventListener("change", handleChange)
    return () =>   mediaQuery.addEventListener("change", handleChange)
},[])



useEffect(()=>{


    if(mode === "dark"){
        window.localStorage.setItem('theme', 'dark')
        document.documentElement.classList.add("dark")
        } 

if(mode==="light")        {
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove("dark")
        }



 

},[mode])


  return (
   [mode, setMode]
  )
}

export default useThemeSwitcher