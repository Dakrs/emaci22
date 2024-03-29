import React from "react";
import Navbar from '@components/common/navbar'
import Footer from '@components/common/footer'
import Head from 'next/head'



const Layout = ({children}) => {
  return (
    <div className="relative w-screen no-scrollbar">
      <Head>
        <title>EMACI 2022</title>
        <meta name="description" content="European Master Athletics Championships Indoor" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="icon" href="/icons/emaci.png" />
      </Head>

      <Navbar />

      <main className="absolute top-20 sm:top-24 w-full lg:top-0 lg:left-1/10 min-h-screen lg:w-vw-90">
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout
