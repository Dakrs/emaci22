import React, {useMemo,useState} from 'react'
import { FilterSortTable } from '@components/common/table'
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';
import { HocFetcher } from '@components/common/hocFetcher';
import Link from "next/link"






const results = (props) => {

  const {data,id} = props;

  //{"nome": "Ussumani", "clube": "AABV", "dorsal": 111, "posicao": 1, "pontos": 2709, "resultados": [496, 366, 687, 520, 640]}

  const headers = [
    {
        Header: 'Pos',
        accessor: 'posicao'
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
    },
    {
      Header: 'Points',
      accessor: 'pontos',
    },
    {
      Header: '100M',
      accessor: 'res0',
    },
    {
      Header: '150M',
      accessor: 'res1',
    },
    {
      Header: '200M',
      accessor: 'res2',
    },
    {
      Header: '250M',
      accessor: 'res3',
    },
    {
      Header: '300M',
      accessor: 'res4',
    },
  ]

  const processed_data = []

  data.prova.resultados.forEach((item, i) => {
    const entry = {...item}

    for(var i = 0; i < data.prova.provas; i++){
      if (i < data.prova.provas_realizadas){
        entry[`res${i}`] = entry.resultados[i]
      }
      else{
        entry[`res${i}`] = ""
      }
    }

    processed_data.push(entry)
  });



  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <div className="w-full flex flex-col justify-center md:flex-row md:justify-between">
        <div className="flex flex-col">
          <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">{data.prova.nome}</h1>
          <h2 className="w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">Results</h2>
        </div>

        <div className="flex items-center justify-center my-4">
          <Link href="/results" passHref>
            <a className="px-6 py-2 text-lg font-semibold text-center rounded text-white bg-slate-700 hover:bg-slate-600">Go Back</a>
          </Link>
        </div>
      </div>

      <div className="w-full py-4">
          <div className="container mx-auto">
            <FilterSortTable dataI={processed_data} headers={headers} id={`comb-results-${id}`}/>
          </div>
      </div>
    </div>
  )
}

export default HocFetcher(results,`${process.env.NEXT_PUBLIC_API_ENDPOINT}/webservice/api/event/comb`)

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
