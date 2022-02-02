import { HocFetcherWithoutId } from '@components/common/hocFetcher';
import { FilterSortTable } from '@components/common/table'
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
      Header: 'Sex',
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

  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <div className="w-full flex flex-col justify-center md:flex-row md:justify-between">
        <div className="flex flex-col">
          <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">Results</h1>
          <h2 className="w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">Finished Competitions</h2>
        </div>
      </div>

      <div className="w-full py-4">
          <div className="container mx-auto">
            <FilterSortTable dataI={data.resultados} headers={headers} id={`ex-results`}/>
          </div>
      </div>
    </div>
  )
}

/**
https://fpacompeticoes.pt/webservice/api/competitions/554/results
*/


export default HocFetcherWithoutId(AvailResults,'https://fpacompeticoes.pt/webservice/api/competitions/554/results');
