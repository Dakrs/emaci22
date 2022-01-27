import {SideLoading, LoadingAbsolute} from '@components/common/loading';
import React, { useState } from "react";
import useSWR from 'swr'
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';

const examples = [
  {
    name: 'John Smith',
    code: '423',
    nacionality: 'CHE'
  },
  {
    name: 'Lewis Smith',
    code: '423',
    nacionality: 'TUR'
  },
  {
    name: 'Carlos Smith',
    code: '423',
    nacionality: 'GBR'
  }
]

export default function athletes(props) {
  //const { data,error } = useSWR(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/field/fieldData/${id}`,fetcher,{refreshInterval: 250})


  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">Long Jump</h1>
      <h2 className="w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">Enrolled Athletes</h2>

      <div className="w-full">
          <div className="container mx-auto">
            <div className="py-8 ">
              <div className="min-w-full shadow-lg rounded-xl overflow-x-auto">
                  <table className="min-w-full leading-normal">
                      <thead className="bg-zinc-50 rounded-xl" onClick={() => console.log(Object.keys(Flags))}>
                        <tr>
                          <th scope="col" className="px-5 py-3  text-slate-800 text-center text-sm uppercase font-bold">
                              Name
                          </th>
                          <th scope="col" className="px-5 py-3  text-slate-800  text-center text-sm uppercase font-bold">
                              Dorsal
                          </th>
                          <th scope="col" className="px-5 py-3  text-slate-800  text-center text-sm uppercase font-bold">
                              Nacionality
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {examples.map((item,i) => {
                          const Flag = Flags[translate2to3(item.nacionality)];
                          return (
                            <tr key={`athletes-list-${23}-${i}`}>
                              <td scope="col" className="px-5 py-3 text-center border-b border-gray-200 bg-white text-sm">
                                {item.name}
                              </td>
                              <td scope="col" className="px-5 py-3 text-center border-b border-gray-200 bg-white text-sm">
                                {item.code}
                              </td>
                              <td scope="col" className="px-5 py-3 text-center border-b border-gray-200 bg-white text-sm">
                                 <div className="w-full flex flex-row items-center justify-center">
                                  <p>{item.nacionality}</p>
                                  <Flag className="h-6 w-8 ml-1" />
                                 </div>
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
