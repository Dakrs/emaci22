import React, { useState } from "react";
import Link from "next/link"
const Index = ({show,change}) => {
    return (
        <div>
            {/* Code block starts */}
            <div className="flex items-center justify-center px-4 lg:px-0 py-12">
                <div id="alert" className={show ? "transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded" : "transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded translate-hide"}>
                    <div className="sm:flex sm:items-start lg:items-center">
                        <div className="flex items-end">
                            <div className="mr-2 text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                                    <path className="heroicon-ui" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </svg>
                            </div>
                            <p className="mr-2 text-base font-bold text-gray-800 dark:text-gray-100">Warning</p>
                        </div>
                        <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block" />
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pt-2 sm:pt-0 pb-2 sm:pb-0">Hurricane warning in this area. Please check local media and authorities-NWS</p>
                    </div>
                    <div className="flex items-center justify-end sm:mt-4 md:mt-0 ml-4">
                        <button className="focus:outline-none mr-8 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">View</button>
                        <div onClick={() => change()} className="cursor-pointer text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                .translate-show{
                    transform : translateY(0%);
                }
                .translate-hide{
                    transform : translateY(18vh);
                }
                `}
            </style>
        </div>
    );
};

const AlertInfo = ({text,href}) => {
  const [show,close] = useState(true)
  //<Link href={href} passHref>
  if (!show)
    return null

  return (
    <div className="fixed z-50 left-vw-5 top-vh-85 w-vw-90 lg:left-vw-15 lg:w-vw-80">
      <div className="w-full text-white bg-sky-400 rounded-lg mb-4">
          <div className="container flex items-center justify-between px-6 py-4 mx-auto">
              <div className="flex items-center">
                  <svg viewBox="0 0 40 40" className="w-10 h-10 lg:w-6 lg:h-6 fill-current">
                      <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path>
                  </svg>

                  <p className="ml-3 mr-1">{text}</p>
                  <Link href={href} passHref>
                    <a className="font-bold">Click Here.</a>
                  </Link>
              </div>

              <button onClick={() => close(false)} className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
          </div>
      </div>
    </div>
  )
}

export { AlertInfo };

export default Index;
