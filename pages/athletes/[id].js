import {SideLoading, LoadingAbsolute} from '@components/common/loading';
import React, { useState } from "react";
import useSWR from 'swr'



export default function athletes(props) {
  const id = props.id;

  if (!id){
    return(<SideLoading />);
  }

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
                      <thead className="bg-zinc-50 rounded-xl">
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
                        <tr>
                          <td scope="col" className="px-5 py-3 text-center border-b border-gray-200 bg-white text-sm">
                            John Smith
                          </td>
                          <td scope="col" className="px-5 py-3 text-center border-b border-gray-200 bg-white text-sm">
                            423
                          </td>
                          <td scope="col" className="px-5 py-3 text-center border-b border-gray-200 bg-white text-sm">
                            US
                          </td>
                        </tr>
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}


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
