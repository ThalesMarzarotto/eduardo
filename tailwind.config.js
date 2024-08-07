


/** @type {import('tailwindcss').Config} */


const {fontFamily} = require("tailwindcss/defaultTheme")

module.exports = {
  important:true,
  content: [ 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors:{
        dark: "#133F58",
        light: "#f5f5f5",
        primary: '#030a8c', // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        primaryGreen: '#158533'
      },
      backgroundImage:{
        circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#959595 0px,#fefefe 100px)",

    circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#133f58 8px,#1b1b1b 100px)",

    circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #959595 5px,#fefefe 80px)",

    circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#133f58 8px,#1b1b1b 80px)",

    circularLightMd:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#959595 5px,#fefefe 60px)",

    circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#133f58 6px,#1b1b1b 60px)",

    circularLightSm:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#959595 5px,#fefefe 40px)",

    circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#133f58 4px,#1b1b1b 40px)",

      instagram: 
      'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
      
       
       
      }

    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "814px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
    
  },
  plugins: [],
}

