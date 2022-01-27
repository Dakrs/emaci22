import React from "react";
import Navbar from '@components/common/navbar'
import Footer from '@components/common/footer'
import Head from 'next/head'



const Layout = ({children}) => {
  return (
    <div className="flex flex-col lg:flex-row overflow-hidden">
      <Head>
        <title>EMACI 2022</title>
        <meta name="description" content="European Master Athletics Championships Indoor" />
        <link rel="icon" href="/icons/emaci.png" />
      </Head>

      <Navbar />

      <main className="min-h-screen w-full">
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout
