import React, { useState } from "react";
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';
import { HocFetcher } from '@components/common/hocFetcher';
import Link from "next/link"
import { GenericTable } from '@components/common/table';
import { FilterSortTable } from '@components/common/table'



const startlist = (props) => {
  //const { data,error } = useSWR(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/field/fieldData/${id}`,fetcher,{refreshInterval: 250})
  const { data,id } = props;

  const headers = [
    {
        Header: 'Track',
        accessor: 'pista'
    },
    {
      Header: 'BIB',
      accessor: 'dorsal'
    },
    {
      Header: 'Name',
      accessor: 'nome',
    },
    {
      Header: 'Country',
      accessor: 'clube',
      Cell: ({value}) => {
        var Flag = Flags[translate2to3(value)];
        return (
          <div className="w-full flex flex-row items-center justify-start">
             <Flag className="h-6 w-8 mr-1" />
             <p>{value}</p>
          </div>
        )
      }
    }
  ]

  const key_series = () => {
    const res = []

    for(var i = 1; i <= data.prova.count; i++){
      res.push(i.toString())
    }

    return res;
  }

  if (data.prova.estafetas){
    headers.push({ Header: `Ath. 1`, accessor: `res0`, disableSortBy: true })
    headers.push({ Header: `Ath. 2`, accessor: `res1`, disableSortBy: true })
    headers.push({ Header: `Ath. 3`, accessor: `res2`, disableSortBy: true })
    headers.push({ Header: `Ath. 4`, accessor: `res3`, disableSortBy: true })
  }

  const get = (item) => {
    if (!data.prova.estafetas)
      return (data.prova.series[item])


    const seriei = data.prova.series[item]

    const newserie = []
    seriei.map((atl,index) => {
      const atlnew = {...atl}
      var temp_res;
      if (atl.estafetas && atl.estafetas !== "")
        temp_res = atl.estafetas.split(',')
      else
        temp_res = []
      for(var i = 0; i < 4; i++){
        if (i < temp_res.length){
          atlnew[`res${i}`] = temp_res[i]
        }
        else{
          atlnew[`res${i}`] = ""
        }
      }

      newserie.push(atlnew)
    })

    return newserie
  }

  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <div className="w-full flex flex-col justify-center md:flex-row md:justify-between">
        <div className="flex flex-col">
          <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">{data.prova.nome}</h1>
          <h2 className="w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">Startlist</h2>
        </div>

        <div className="flex items-center justify-center my-4">
          <Link href={`/schedule?day=${data.prova.dia}`} passHref>
            <a className="px-6 py-2 text-lg font-semibold text-center rounded text-white bg-slate-700 hover:bg-slate-600">Go Back</a>
          </Link>
        </div>
      </div>

      <div className="w-full py-4">
          <div className="container mx-auto">
            {
              key_series().map((item,index) => {
                return (
                  <div key={`${id}-series-${item}`} className="w-full">
                    <h2 className={`w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} leading-none dark:text-write text-slate-800`}>Heat {item}</h2>
                    <div className="py-8 ">
                      <FilterSortTable dataI={get(item)} headers={headers} id={`${id}-series-${index}`}/>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default HocFetcher(startlist,`${process.env.NEXT_PUBLIC_API_ENDPOINT}/webservice/api/event/startlists`)


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
