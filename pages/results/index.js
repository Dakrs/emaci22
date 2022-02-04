import { HocFetcherWithoutId } from '@components/common/hocFetcher';
import { FilterSortTableWithPage } from '@components/common/table'
import Link from "next/link"



const AvailResults = (props) => {

  const {data} = props

  //{"id": 9342, "hora": "16:30:00", "dia": 0, "nome": "600 metros", "tipo": "", "sexo": "Female"}
  const headers = [
    {
        Header: 'Event',
        accessor: 'nome'
    },
    {
      Header: 'Gender',
      accessor: 'sexo'
    },
    {
      Header: 'Results',
      accessor: 'id',
      Cell: ({value}) => {
        return (
          <Link href={`/results/${value}`} passHref>
              <a className="px-6 py-2 text-lg font-semibold text-center rounded text-white bg-slate-700 hover:bg-slate-600">
                  Results
              </a>
           </Link>
        )
      }
    }
  ]

  const headersComb = [
    {
        Header: 'Event',
        accessor: 'nome'
    },
    {
      Header: 'Gender',
      accessor: 'sexo'
    },
    {
      Header: 'Results',
      accessor: 'id',
      Cell: ({value}) => {
        return (
          <Link href={`/results/multi/${value}`} passHref>
              <a className="px-6 py-2 text-lg font-semibold text-center rounded text-white bg-slate-700 hover:bg-slate-600">
                  Results
              </a>
           </Link>
        )
      }
    }
  ]

  if (data.resultados.length === 0 && data.combinadas.length === 0)
    return (
      <div className="w-full min-h-screen h-full bg-slate-100 flex justify-center items-center">
        <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center leading-none dark:text-write text-slate-800">No Result Available</h1>
      </div>
    )

  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      {data.resultados.length > 0 && (
        <>
          <div className="w-full flex flex-col justify-center md:flex-row md:justify-between">
            <div className="flex flex-col">
              <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">Results</h1>
              <h2 className="w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">Finished Competitions</h2>
            </div>
          </div>

          <div className="w-full py-4">
              <div className="container mx-auto">
                <FilterSortTableWithPage dataI={data.resultados} headers={headers} id={`ex-results`} size={7}/>
              </div>
          </div>
        </>
      )}
      {data.combinadas.length > 0 && (
        <>
          <div className="w-full flex flex-col justify-center md:flex-row-reverse md:justify-between">
            <div className="flex flex-col">
              <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center sm:text-right leading-none dark:text-write text-slate-800">Combined</h1>
              <h2 className="w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center sm:text-right leading-none dark:text-write text-slate-800">Competitions</h2>
            </div>
          </div>

          <div className="w-full py-4">
              <div className="container mx-auto">
                <FilterSortTableWithPage dataI={data.combinadas} headers={headersComb} id={`ex-multi-results`} size={7}/>
              </div>
          </div>
        </>
      )}
    </div>
  )
}

/**
https://fpacompeticoes.pt/webservice/api/competitions/554/results
*/


export default HocFetcherWithoutId(AvailResults,`${process.env.NEXT_PUBLIC_API_ENDPOINT}/webservice/api/competitions/1/results`);
