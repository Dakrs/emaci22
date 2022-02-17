import { TitleSection } from '@components/common/templateSection';
import { RiMedalLine } from 'react-icons/ri';
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';
import { TableSkeleton,VerticalCardSkeleton } from '@components/common/skeletons/skeletons';
import useSWR from 'swr'
import { fetcher } from '@utils/fetcher';
import { FilterSortTableWithPage } from '@components/common/table'


const Firstplace = ({country}) => {

  var Flag = Flags[translate2to3(country.country)];

  return (
    <div className="p-1 w-4/5 sm:w-custom sm:-mt-6 bg-gradient-to-r from-orange-500 to-yellow-300 shadow-md rounded-2xl mb-10">
      <article className="w-full py-16 text-slate-800 z-10 bg-white rounded-xl text-center">
        <div className="flex w-full items-center justify-center">
          <Flag className="h-22 w-24" />
        </div>
        <h2 className="pt-4 flex flex-col justify-center font-bold">
          <span className="text-6xl text-slate-800">1º</span>
        </h2>
        <h5 className="pb-4 font-bold text-base text-slate-800">Place</h5>
        <h2 className="pb-4 flex flex-col justify-center font-bold">
          <span className="text-4xl text-slate-800">{country.country}</span>
        </h2>
        <ul className="text-sm font-bold">
          <li>
            <div className="flex justify-center items-center text-center">
              <RiMedalLine className="text-yellow-400 h-6 w-6 mr-1"/>
              {country.gold} Gold Medals
            </div>
          </li>
          <li>
            <div className="flex justify-center items-center text-center">
              <RiMedalLine className="text-gray-300 h-6 w-6 mr-1"/>
              {country.silver} Silver Medals
            </div>
          </li>
          <li>
            <div className="flex justify-center items-center text-center">
              <RiMedalLine className="text-amber-900 h-6 w-6 mr-1"/>
              {country.bronze} Bronze Medals
            </div>
          </li>
        </ul>
      </article>
    </div>
  )
}

const Secondplace = ({country}) => {
  var Flag = Flags[translate2to3(country.country)];

  return (
    <div className="p-1 sm:pr-0 w-4/5 sm:w-custom bg-gradient-to-r from-gray-100 to-gray-300 shadow-md rounded-2xl sm:rounded-r-none sm:rounded-l-2xl mb-10">
      <article className="w-full sm:px-4 py-10 text-center rounded-xl sm:rounded-r-none sm:rounded-l-xl bg-white">
        <div className="flex w-full items-center justify-center">
          <Flag className="h-22 w-24" />
        </div>
        <h2 className="pt-4 flex flex-col justify-center font-bold">
          <span className="text-4xl text-slate-800">2º</span>
        </h2>
        <h5 className="pb-4 font-bold text-base text-slate-800">Place</h5>
        <h2 className="pb-4 flex flex-col justify-center font-bold">
          <span className="text-4xl text-slate-800">{country.country}</span>
        </h2>
        <ul className="text-sm font-bold">
          <li>
            <div className="flex justify-center items-center text-center">
              <RiMedalLine className="text-yellow-400 h-6 w-6 mr-1"/>
              {country.gold} Gold Medals
            </div>
          </li>
          <li>
            <div className="flex justify-center items-center text-center">
              <RiMedalLine className="text-gray-300 h-6 w-6 mr-1"/>
              {country.silver} Silver Medals
            </div>
          </li>
          <li>
            <div className="flex justify-center items-center text-center">
              <RiMedalLine className="text-amber-900 h-6 w-6 mr-1"/>
              {country.bronze} Bronze Medals
            </div>
          </li>
        </ul>
      </article>
    </div>
  )
}

const Thirdplace = ({country}) => {
  var Flag = Flags[translate2to3(country.country)];

  return (
    <div className="p-1 sm:pl-0 w-4/5 sm:w-custom bg-gradient-to-r from-red-800 to-amber-800 shadow-md rounded-2xl sm:rounded-l-none sm:rounded-r-2xl mb-10">
      <article className="w-full sm:px-4 py-10 text-center rounded-xl sm:rounded-l-none sm:rounded-r-xl bg-white">
        <div className="flex w-full items-center justify-center">
          <Flag className="h-22 w-24" />
        </div>
        <h2 className="pt-4 flex flex-col justify-center font-bold">
          <span className="text-3xl text-slate-800">3º</span>
        </h2>
        <h5 className="pb-4 font-bold text-base text-slate-800">Place</h5>
        <h2 className="pb-4 flex flex-col justify-center font-bold">
          <span className="text-4xl text-slate-800">{country.country}</span>
        </h2>
        <ul className="text-sm font-bold">
          <li>
            <div className="flex justify-center items-center text-center">
              <RiMedalLine className="text-yellow-400 h-6 w-6 mr-1"/>
              {country.gold} Gold Medals
            </div>
          </li>
          <li>
            <div className="flex justify-center items-center text-center">
              <RiMedalLine className="text-gray-300 h-6 w-6 mr-1"/>
              {country.silver} Silver Medals
            </div>
          </li>
          <li>
            <div className="flex justify-center items-center text-center">
              <RiMedalLine className="text-amber-900 h-6 w-6 mr-1"/>
              {country.bronze} Bronze Medals
            </div>
          </li>
        </ul>
      </article>
    </div>
  )
}

const Loadingwinner = (props) => (
  <>
    <div className="p-1 lg:pr-0 w-4/5 lg:w-custom bg-gradient-to-r from-gray-100 to-gray-300 shadow-md rounded-2xl lg:rounded-r-none lg:rounded-l-2xl mb-10">
      <VerticalCardSkeleton rounded="rounded-2xl lg:rounded-r-none lg:rounded-l-2xl" />
    </div>
    <div className="p-1 w-4/5 lg:w-custom lg:-mt-6 bg-gradient-to-r from-orange-500 to-yellow-300 shadow-md rounded-2xl mb-10">
      <VerticalCardSkeleton size="big" />
    </div>
    <div className="p-1 lg:pl-0 w-4/5 lg:w-custom bg-gradient-to-r from-red-800 to-amber-800 shadow-md rounded-2xl lg:rounded-l-none lg:rounded-r-2xl mb-10">
      <VerticalCardSkeleton  rounded="rounded-2xl lg:rounded-l-none lg:rounded-r-2xl"/>
    </div>
  </>
)

const Ranking = (props) => {
  const { data,error } = useSWR(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/webservice/api/competitions/1/medals`,fetcher)

  var loading = false;

  if (error || !data)
    loading = true

  const headers = [
    {
        Header: 'Country',
        accessor: 'country',
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
        Header: 'Total',
        accessor: 'total',
    },
    {
        Header: 'Gold',
        accessor: 'gold'
    },
    {
        Header: 'Silver',
        accessor: 'silver'
    },
    {
        Header: 'Bronze',
        accessor: 'bronze'
    }
  ]

  return (
    <div className="w-full px-4 py-6 sm:p-10 sm:p-16 bg-slate-50">
      <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center leading-none dark:text-write text-slate-800">Rankings</h1>
      <div className="flex flex-wrap w-full justify-center items-center py-10 mt-6">
        {loading || data.medals.length < 3 ? (<Loadingwinner />) : (
          <>
            <Secondplace country={data.medals[1]} />
            <Firstplace country={data.medals[0]} />
            <Thirdplace country={data.medals[2]} />
          </>
        )}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
          <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center leading-none dark:text-write text-slate-800">Complete</h1>
          <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center leading-none dark:text-write text-slate-800">List</h1>
        </div>
        <div className="w-full lg:w-2/3 px-4">
          <div className="container mx-auto">
            {loading ? (<TableSkeleton />) : (
              <FilterSortTableWithPage dataI={data.medals} headers={headers} id={`ex-medals-`} size={7}/>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ranking
