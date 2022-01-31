import React, {useMemo,useState} from 'react'
import { FilterSortTable } from '@components/common/table'
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';
import { HocFetcher } from '@components/common/hocFetcher';
import Link from "next/link"
import RunSeries from '@components/athletes/RunSeries';


const results = (props) => {

  const {data,id} = props;

  var component = null;

  /**
  tipop 4 : lancamentos

  tipo 3 : saltos horizontais
  tipo 2 : saltos verticais
  */

  switch (data.prova.tipo) {
    case 2: //
      component = (<div>Saltos verticais ainda por implementar</div>)
      break;
    case 3: //
      component = (<div>Saltos horizontais ainda por implementar</div>)
      break;
    case 4: //
      component = (<div>Lançamentos ainda por implementar</div>)
      break;
    default:
      component = (<RunSeries data={data} id={id}/>)
  }

  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <div className="w-full flex flex-col justify-center md:flex-row md:justify-between">
        <div className="flex flex-col">
          <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">{data.prova.nome}</h1>
          <h2 className="w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">Results</h2>
        </div>

        <div className="flex items-center justify-center my-4">
          <Link href={`/schedule?day=${data.prova.dia}`} passHref>
            <a className="px-6 py-2 text-lg font-semibold text-center rounded text-white bg-slate-700 hover:bg-slate-600">Go Back</a>
          </Link>
        </div>
      </div>

      <div className="w-full py-4">
          <div className="container mx-auto">
            {component}
          </div>
      </div>
    </div>
  )
}

export default HocFetcher(results,'https://fpacompeticoes.pt/webservice/api/event/results')

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