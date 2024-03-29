import React, { useState } from "react";
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';
import { HocFetcher } from '@components/common/hocFetcher';
import Link from "next/link"
import { FilterSortTable } from '@components/common/table';
import { TitleSection } from '@components/common/templateSection';



const Athletes = (props) => {
  //const { data,error } = useSWR(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/field/fieldData/${id}`,fetcher,{refreshInterval: 250})
  const { data,id } = props;

  const headers = [
    {
      Header: 'Name',
      accessor: 'nome',
    },
    {
      Header: 'Birth Date',
      accessor: 'datanascimento'
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
      Header: 'Best Result',
      accessor: 'melhor_marca'
    },
  ]

  //data.prova.atletas

  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <TitleSection title={data.prova.nome} subtitle="Enrolled Athletes" />

      <div className="w-full">
          <div className="container mx-auto">
            <div className="py-8 ">
              <FilterSortTable dataI={data.prova.atletas} headers={headers} id={`${id}-athletes-`} />
            </div>
          </div>
      </div>
    </div>
  )
}

//export default hocFetcher(athletes,'https://fpacompeticoes.pt/webservice/api/event/inscriptions/10139/',[examples2,true])
export default HocFetcher(Athletes,`${process.env.NEXT_PUBLIC_API_ENDPOINT}/webservice/api/event/inscriptions`)


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
