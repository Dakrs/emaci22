import React from "react";
import Image from 'next/image'
import { BsCalendarDate, BsGlobe, BsMap } from 'react-icons/bs';
import { BiTrophy } from 'react-icons/bi';
import { AiOutlineInfoCircle,AiOutlineGlobal } from 'react-icons/ai';
import Link from "next/link"
import { withRouter } from 'next/router'


const Navbar = (props) => {
  const {router} = props;

  const flags = {
    'schedule': false,
    'results': false,
    'info': false,
    'mapping': false
  }

  const active = router.pathname.split('\/')[1]

  if (active in flags)
    flags[active] = true

  return (
    <div className="w-full z-50 lg:w-1/10 lg:h-screen lg:max-h-screen fixed top-0 bg-white">
      <nav className="w-full flex flex-row lg:h-screen lg:flex-col justify-center bg-white">
        <div className="flex items-center justify-center w-20 sm:w-28 lg:w-full lg:h-28 bg-white">
          <Link href="/" passHref>
            <a className="h-20 w-20 sm:h-24 sm:w-24 relative">
              <Image
                src='/icons/emaci.png'
                alt="Logo Emacir"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-full" // just an example
                priority
              />
            </a>
          </Link>
        </div>
        <div className={`flex items-center justify-center max-w-20 sm:max-w-28 w-full lg:max-w-none lg:h-28 ${flags['schedule'] ? 'bg-slate-800 text-white' : 'bg-white text-slate-800 dark:text-slate-400'} `}>
          <Link href="/schedule">
            <a className={`${flags['schedule'] ? '' : 'hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600'} w-full h-full flex flex-col rounded items-center justify-center  transition-colors duration-200  text-center cursor-pointer`}>
                <BsCalendarDate className="h-10 w-10" />
                <span className="text-md sm:text-lg font-normal">Schedule</span>
            </a>
          </Link>
        </div>
        <div className={`flex items-center justify-center max-w-20 sm:max-w-28 w-full lg:max-w-none lg:h-28 ${flags['mapping'] ? 'bg-slate-800 text-white' : 'bg-white text-slate-800 dark:text-slate-400'} `}>
          <Link href="/mapping">
            <a className={`${flags['mapping'] ? '' : 'hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600'} w-full h-full flex flex-col rounded items-center justify-center  transition-colors duration-200  text-center cursor-pointer`}>
                <BsMap className="h-10 w-10" />
                <span className="text-md sm:text-lg font-normal">Map</span>
            </a>
          </Link>
        </div>
        <div className={`flex items-center justify-center max-w-20 sm:max-w-28 w-full lg:max-w-none lg:h-28 ${flags['results'] ? 'bg-slate-800 text-white' : 'bg-white text-slate-800 dark:text-slate-400'} `}>
          <Link href="/results">
            <a className={`${flags['results'] ? '' : 'hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600'} w-full h-full flex flex-col rounded items-center justify-center  transition-colors duration-200  text-center cursor-pointer`}>
                <BiTrophy className="h-10 w-10" />
                <span className="text-md sm:text-lg font-normal">Results</span>
            </a>
          </Link>
        </div>
        <div className={`flex items-center justify-center max-w-20 sm:max-w-28 w-full lg:max-w-none lg:h-28 ${flags['info'] ? 'bg-slate-800 text-white' : 'bg-white text-slate-800 dark:text-slate-400'} `}>
          <Link href="/info">
            <a className={`${flags['info'] ? '' : 'hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600'} w-full h-full flex flex-col rounded items-center justify-center  transition-colors duration-200  text-center cursor-pointer`}>
                <AiOutlineInfoCircle className="h-10 w-10" />
                <span className="text-md sm:text-lg font-normal">Info</span>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Navbar);
