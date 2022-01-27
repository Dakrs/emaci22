import React from "react";
import siteMeta from '@data/siteMeta.json'


const Icon = ({type,link}) => {
  const icons = (id) => {
    var res = ''
    switch (id) {
      case 'instagram':
        res = 'fab fa-instagram'
        break;
      case 'facebook':
        res = 'fab fa-facebook'
        break;
      case 'email':
        res = 'fas fa-at'
        break;
      case 'whatsapp':
        res = 'fab fa-whatsapp'
        break;
      default:
        res = 'far fa-question-circle'
    }
    return res;
  }

  return (
    <a className="hover:text-primary-gray-20 mx-1" href={link}>
        <i className={`${icons(type)} text-3xl`}/>
    </a>
  )
}


const Footer = (props) => {
  return (
    <footer className="px-3 py-8 dark:bg-white bg-gray-800 text-2 dark:text-gray-500 text-gray-200 transition-colors duration-200">
        <div className="flex flex-col">
            <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
            </div>
            <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
                <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                    <a aria-current="page" href="#" className="dark:hover:text-gray-700 hover:text-white">
                        Components
                    </a>
                    <a aria-current="page" href="#" className="dark:hover:text-gray-700 hover:text-white">
                        Contacts
                    </a>
                    <a aria-current="page" href="#" className="dark:hover:text-gray-700 hover:text-white">
                        Customization
                    </a>
                </nav>
                <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full">
                </div>
                <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                  {Object.keys(siteMeta['contacts']).map((social) => {
                    if (siteMeta['contacts'][social].length == 0)
                      return null
                    return ( <Icon key={`Footer-Icon-${social}`} type={social} link={siteMeta['contacts'][social]} /> )
                  })}
                </div>
                <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
                </div>
                <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                    <span className="">
                        © 2022
                    </span>
                    <span className="mt-7 md:mt-1">
                        Created by
                    </span>
                    <a className="underline hover:text-primary-gray-20" href="#">
                        Mega e Ambrósio
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
