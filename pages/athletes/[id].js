import React, { useState } from "react";
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';
import { hocFetcher } from '@components/common/hocFetcher';
import Link from "next/link"


const examples2 = [
  {"nome":"Diego JimÃ©nez","clube":"ESP","datanascimento":"1995-05-10","melhor_marca":"00:03:45:83","dorsal":127},
  {"nome":"Carlos Porto","clube":"ESP","datanascimento":"1993-01-10","melhor_marca":"00:03:47:42","dorsal":131},
  {"nome":"Jorge Puig Malvar","clube":"ESP","datanascimento":"1997-04-05","melhor_marca":"00:03:47:42","dorsal":132},
  {"nome":"Pablo Bocelo Bellas","clube":"ESP","datanascimento":"1993-12-16","melhor_marca":"00:03:48:02","dorsal":133},
  {"nome":"Saoud Jouma AL Zaabi","clube":"UAE","datanascimento":"1988-08-07","melhor_marca":"00:03:48:51","dorsal":134},
  {"nome":"Carlos Lopez Moral","clube":"ESP","datanascimento":"2003-04-27","melhor_marca":"00:03:54:98","dorsal":137},
  {"nome":"Pedro VÃ¡zquez Bueno","clube":"ESP","datanascimento":"2004-01-10","melhor_marca":"00:03:55:62","dorsal":139}
]

const athletes = (props) => {
  //const { data,error } = useSWR(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/field/fieldData/${id}`,fetcher,{refreshInterval: 250})
  const { data,id } = props;

  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <div className="w-full flex flex-col justify-center md:flex-row md:justify-between">
        <div className="flex flex-col">
          <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">{data.prova.nome}</h1>
          <h2 className="w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">Enrolled Athletes</h2>
        </div>

        <div className="flex items-center justify-center my-4">
          <Link href={`/schedule?day=${data.prova.dia}`} passHref>
            <a className="px-6 py-2 text-lg font-semibold text-center rounded text-white bg-slate-700 hover:bg-slate-600">Go Back</a>
          </Link>
        </div>
      </div>

      <div className="w-full">
          <div className="container mx-auto">
            <div className="py-8 ">
              <div className="min-w-full shadow-lg rounded-xl overflow-x-auto">
                  <table className="min-w-full leading-normal">
                      <thead className="bg-zinc-50 rounded-xl">
                        <tr>
                          <th scope="col" className="px-5 py-3  text-slate-800 text-left text-sm uppercase font-bold">
                              Name
                          </th>
                          <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                              Birth Date
                          </th>
                          <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                              Nacionality
                          </th>
                          <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                              Best Result
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.prova.atletas.map((item,i) => {
                          const Flag = Flags[translate2to3(item.clube)];
                          return (
                            <tr key={`athletes-list-${id}-${i}`}>
                              <td scope="col" className="px-5 py-3 text-left border-b border-gray-200 bg-white text-sm">
                                {item.nome}
                              </td>
                              <td scope="col" className="px-5 py-3 text-left border-b border-gray-200 bg-white text-sm">
                                {item.datanascimento}
                              </td>
                              <td scope="col" className="px-5 py-3 text-center border-b border-gray-200 bg-white text-sm">
                                 <div className="w-full flex flex-row items-center justify-start">
                                    <p>{item.clube}</p>
                                    <Flag className="h-6 w-8 ml-1" />
                                 </div>
                              </td>
                              <td scope="col" className="px-5 py-3 text-left border-b border-gray-200 bg-white text-sm">
                                {item.melhor_marca}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

//export default hocFetcher(athletes,'https://fpacompeticoes.pt/webservice/api/event/inscriptions/10139/',[examples2,true])
export default hocFetcher(athletes,'https://fpacompeticoes.pt/webservice/api/event/inscriptions/10139')


export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = []
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  return { props: { id: params.id } }
}
