import { Inter } from "next/font/google";

import "./globals.css";
import Script from "next/script";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";
import Head from "next/head";



export const metadata = {

  title: "Dr. Eduardo Jorgens",
  description: "MEDICO CIRURGIAO BARIATRICO",
};

export default function RootLayout({  children }) {

  return (

    <html lang="en" font-size="16px">
      <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <link rel='icon' href='/flavicon.ico'/> 
      
    
      </Head> 
       
        
      <body className="body" >
      <main >
        <NavBar/>
         {children}
        <Footer/>
      </main>
   


      </body>
    </html>
  );
}

