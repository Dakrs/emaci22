import { HocFetcherWithoutId } from '@components/common/hocFetcher';
import { FilterSortTableWithPage } from '@components/common/table';
import Link from "next/link";
import { AlertInfo } from '@components/common/alert'



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
        <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center leading-none dark:text-write text-slate-800">No Results Available</h1>
      </div>
    )


  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <Link href="/collective" passHref>
        <a className="w-full text-white bg-emerald-400 rounded-lg mb-4">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                <div className="flex items-center">
                    <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path>
                    </svg>

                    <p className="ml-3 mr-1">To see the collective results click here. </p>
                </div>
            </div>
        </a>
      </Link>
      <AlertInfo href="/#rankings" text="Check the medal's scoreboard." />
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
