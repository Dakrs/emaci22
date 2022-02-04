/**
const Visit = (props) => {
  return (
    <div className="w-full px-4 py-6 sm:p-10 lg:p-16 bg-slate-100">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="p-1 shadow-xl w-3/4 sm:w-1/2 min-w-60 mb-4 lg:w-4/12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
          <a className="block h-40 sm:h-48 p-6 bg-white sm:p-8 rounded-xl bg-cover bg-banner-image-eventweb" href="https://www.emaci2022braga.com/">
          </a>
        </div>
        <div className="w-1/2 lg:w-1/3 flex flex-col justify-center">
          <h1 className="w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl sm:text-4xl font-black text-center leading-none dark:text-write text-slate-800">Visit the main event website</h1>
        </div>
      </div>
    </div>
  )
}*/
import React from "react";
import Image from 'next/image'

const Visit = (props) => {
  return (
    <div className="w-full px-4 py-6 sm:p-10 lg:p-16 bg-slate-100">
      <div className="w-full md:w-2/3 container mx-auto">
        <a href="https://www.emaci2022braga.com/en" className="relative flex items-end w-full bg-slate-100 h-72 md:h-96 group">
          <Image layout="fill" alt="Modded Bike" objectFit="cover" className="transition-opacity group-hover:opacity-90" src="/images/imagem_topo.jpg"/>
          <div className="relative w-full p-6 tracking-widest text-center text-white transition-colors bg-slate-800 sm:w-2/3 group-hover:bg-slate-700">
            <strong className="text-lg uppercase">
              Emaci
            </strong>
            <p className="mt-1 text-xs font-medium uppercase">
              {'Find out more in the event\'s main website'}
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Visit;
