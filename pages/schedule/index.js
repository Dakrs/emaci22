import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { AiOutlineClockCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsGenderAmbiguous, BsCheck2Circle } from 'react-icons/bs';
import { CgTimelapse } from 'react-icons/cg';
import { FaClipboardList, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { GiPodium } from 'react-icons/gi';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import Link from "next/link";
import { TBRow, TBRowMobile } from '@components/common/table';
import { HocFetcherWithoutId } from '@components/common/hocFetcher';
import { useRouter } from 'next/router'
import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted } from 'react-icons/ti';
import { ImSpinner } from 'react-icons/im';





//20 - 27
const days = [
  {name: 'Day 1', date: '20 Feb'},
  {name: 'Day 2', date: '21 Feb'},
  {name: 'Day 3', date: '22 Feb'},
  {name: 'Day 4', date: '23 Feb'},
  {name: 'Day 5', date: '24 Feb'},
  {name: 'Day 6', date: '25 Feb'},
  {name: 'Day 7', date: '26 Feb'},
  {name: 'Day 8', date: '27 Feb'}
]

function CompressedColumn({event}) {
  return (
    <div className="text-left">
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white dark:text-write bg-slate-800 rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            More
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 flex flex-col mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div className={`text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                  <AiOutlineClockCircle className="w-5 h-5 mr-2"  />
                  {event.hora}
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className={`text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                  <BsGenderAmbiguous className="w-5 h-5 mr-2"  />
                  {event.sexo}
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className={`text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                  <CgTimelapse className="w-5 h-5 mr-2"  />
                  {event.tipo}
                </div>
              </Menu.Item>
              <Menu.Item>
                {event.inscriptions ? (
                  <Link href={`/athletes/${event.id}`} passHref>
                    <a className={`hover:text-white hover:bg-slate-800 cursor-pointer text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      <HiOutlineDocumentReport className="w-5 h-5 mr-2"  />
                      Athletes
                    </a>
                  </Link>
                ) : (
                  <div className={`text-gray-200 group cursor-not-allowed flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    <HiOutlineDocumentReport className="w-5 h-5 mr-2"  />
                    Athletes
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {event.startlist ? (
                  <Link href={`/startlist/${event.id}`} passHref>
                    <a className={`hover:text-white hover:bg-slate-800 cursor-pointer text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      <FaClipboardList className="w-5 h-5 mr-2"  />
                      Startlist
                    </a>
                  </Link>
                ) : (
                  <div className={`text-gray-200 group cursor-not-allowed flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    <FaClipboardList className="w-5 h-5 mr-2"  />
                    Startlist
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {event.results ? (
                  <Link href={`/results/${event.id}`} passHref>
                    <a className={`hover:text-white hover:bg-slate-800 cursor-pointer text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      <GiPodium className="w-5 h-5 mr-2"  />
                      Results
                    </a>
                  </Link>
                ) : (
                  <div className={`text-gray-200 group cursor-not-allowed flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    <GiPodium className="w-5 h-5 mr-2"  />
                    Results
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                <div className={`text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                  <AiOutlineInfoCircle className="w-5 h-5 mr-2"  />
                  {event.concluida === null ? (
                    ' '
                  ) : (
                    <>
                      {event.concluida === false ? 'Running' : 'Finished'}
                    </>
                  )}
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

const TBRowFull = ({event}) => {
  return (
    <>
      <TBRow>
        <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm`}>
          <p className="text-gray-900 whitespace-no-wrap">
              {event.hora}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
              {event.sexo}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
              {event.nome}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
              {event.tipo}
          </p>
        </td>
        <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm`}>
          {event.inscriptions ?
            (<Link href={`/athletes/${event.id}`} passHref>
                <a className="text-gray-900 hover:text-gray-500 whitespace-no-wrap cursor-pointer">
                    Athletes
                </a>
             </Link>
            ):(
              <p className="text-gray-200 whitespace-no-wrap cursor-not-allowed">
                  Athletes
              </p>
            )
          }
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {event.startlist ?
            (<Link href={`/startlist/${event.id}`} passHref>
                <a className="text-gray-900 hover:text-gray-500 whitespace-no-wrap cursor-pointer">
                    Startlist
                </a>
             </Link>
            ):(
              <p className="text-gray-200 whitespace-no-wrap cursor-not-allowed">
                  Startlist
              </p>
            )
          }
        </td>
        <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm`}>
          {event.results ?
            (<Link href={`/results/${event.id}`} passHref>
                <a className="text-gray-900 hover:text-gray-500 whitespace-no-wrap cursor-pointer">
                    Results
                </a>
             </Link>
            ):(
              <p className="text-gray-200 whitespace-no-wrap cursor-not-allowed">
                  Results
              </p>
            )
          }
        </td>
        <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm`}>
          {event.concluida === null && (' ')}
          {event.concluida === false && (
            <div className="flex flex-row">
              <ImSpinner className="animate-spin h-5 w-5"/>
              <p className="ml-1">Running</p>
            </div>
          )}
          {event.concluida === true && (
            <div className="flex flex-row">
              <BsCheck2Circle className="h-5 w-5"/>
              <p className="ml-1">Finished</p>
            </div>
          )}
        </td>
      </TBRow>
      <TBRowMobile>
        <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm`}>
          <div className="flex flex-col items-center">
            <p className="text-gray-900 whitespace-no-wrap text-center">
                {event.nome}
            </p>
            <p className="text-gray-900 whitespace-no-wrap text-center">
              {event.concluida === false && (
                <ImSpinner className="animate-spin h-5 w-5"/>
              )}
              {event.concluida === true && (
                <BsCheck2Circle className="h-5 w-5"/>
              )}
            </p>
          </div>
        </td>
        <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm`}>
          <CompressedColumn event={event} />
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
              {event.sexo}
          </p>
        </td>
      </TBRowMobile>
    </>
  )
}

function validate_day(day){

  var intDay = parseInt(day)

  return day && intDay >= 0 && intDay <= 7;
}

const Schedule = (props) => {
  const { data } = props;
  const router = useRouter()
  const { day,searchq } = router.query

  //var st_index = validate_day(day) ? parseInt(day) : 0;

  const [index,setIndex] = useState(0);
  const [search,setSearch] = useState('');
  const [sorting,setSorting] = useState([0,0,0])

  useEffect(() => {
    if (validate_day(day)){
      setIndex(parseInt(day))
    }
    if (searchq){
      setSearch(searchq)
    }
  },[day,searchq])

  const next = () => {
    let i = index + 1;
    setIndex(i % days.length)
  }

  const copy = {...data}

  const prev = () => {
    let i = index - 1;

    if (i >= 0)
      setIndex(i % days.length)
    else
      setIndex(days.length - 1)
  }

  const get = () => {
    const key = (index + 1).toString();

    if (key in data)
      return (data[key])

    return []
  }

  const update_sort = (i) => {
    const res = [0,0,0];

    res[i] = (sorting[i] + 1) % 3;
    setSorting(res)
  }

  const sort = (vals) => {
    var i = 0
    while (i < sorting.length) {
      if (sorting[i] != 0)
        break;
      i++
    }

    /**
    hora: '16:30',
    sex: 'Male',
    nome: 'Long Jump',
    */

    var func = undefined;

    switch (i) {
      case 0:
        switch (sorting[i]) {
          case 1: //cres
            func = (ev1,ev2) => {
              if (ev1.hora > ev2.hora)
                return 1
              if (ev1.hora < ev2.hora)
                return -1
              return 0
            }
            break;
          case 2: //des
            func = (ev1,ev2) => {
              if (ev1.hora > ev2.hora)
                return -1
              if (ev1.hora < ev2.hora)
                return 1
              return 0
            }
            break;
          default:
        }
        break;
      case 1:
        switch (sorting[i]) {
          case 1: //cres
            func = (ev1,ev2) => {
              if (ev1.sexo > ev2.sexo)
                return 1
              if (ev1.sexo < ev2.sexo)
                return -1
              return 0
            }
            break;
          case 2: //des
            func = (ev1,ev2) => {
              if (ev1.sexo > ev2.sexo)
                return -1
              if (ev1.sexo < ev2.sexo)
                return 1
              return 0
            }
            break;
          default:
        }
        break;
      case 2:
        switch (sorting[i]) {
          case 1: //cres
            func = (ev1,ev2) => {
              if (ev1.nome > ev2.nome)
                return 1
              if (ev1.nome < ev2.nome)
                return -1
              return 0
            }
            break;
          case 2: //des
            func = (ev1,ev2) => {
              if (ev1.nome > ev2.nome)
                return -1
              if (ev1.nome < ev2.nome)
                return 1
              return 0
            }
            break;
          default:
        }
        break
      default:
    }

    return vals.sort(func)
  }

  const sortIconState = (state) => {
    switch (state) {
      case 0:
        return (<TiArrowUnsorted className="h-6 w-6" />)
        break;
      case 1:
        return (<TiArrowSortedUp className="h-6 w-6" />)
      case 2:
        return (<TiArrowSortedDown className="h-6 w-6" />)
      default:
    }
  }

  return (
      <div className="min-h-screen flex flex-col items-center w-full bg-slate-100 p-10 lg:p-16">
        <div className="flex w-full items-end justify-center md:justify-between">
          <div className="flex flex-row">
            <div className="flex items-center dark:text-write text-slate-800 mr-2 hover:text-slate-700 cursor-pointer">
              <FaArrowLeft onClick={prev} className="h-12 w-12 sm:h-16 sm:w-16" />
            </div>
            <div className="flex flex-col">
              <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-left leading-none dark:text-write text-slate-800">{days[index].name}</h1>
              <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-left leading-none dark:text-write text-slate-800">{days[index].date}</h1>
            </div>
            <div className="flex items-center dark:text-write text-slate-800 mr-2 hover:text-slate-700 cursor-pointer">
              <FaArrowRight onClick={next} className="h-12 w-12 sm:h-16 sm:w-16" />
            </div>
          </div>
          <div className="hidden md:flex">
            <h1 className="font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-left leading-none dark:text-write text-slate-800">Competitions</h1>
          </div>
        </div>
        <div className="w-full">
            <div className="container mx-auto">
              <div className="py-8 ">
                <div className="min-w-full shadow-lg rounded-xl overflow-x-auto">
                    <table className="min-w-full table-auto leading-normal">
                        <thead className="bg-zinc-50 rounded-xl">
                            <tr>
                              <th scope="col" className="px-5 py-3  text-slate-800  text-center text-sm md:text-lg uppercase font-bold">
                                Search:
                              </th>
                              <th colSpan={7} scope="col" className="px-5 py-3 bg-white text-slate-800  text-left text-sm uppercase font-bold">
                                <input value={search} onChange={(e) => (setSearch(e.target.value))} className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              </th>
                            </tr>
                            <TBRow>
                                <th scope="col" className="px-5 py-3  text-slate-800 text-left text-sm uppercase font-bold" onClick={() => update_sort(0)}>
                                    <div className="w-full flex flex-row items-center justify-between">
                                     Local Time
                                     <span>
                                      {sortIconState(sorting[0])}
                                     </span>
                                    </div>
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold" onClick={() => update_sort(1)}>
                                  <div className="w-full flex flex-row items-center justify-between">
                                   Gender
                                   <span>
                                    {sortIconState(sorting[1])}
                                   </span>
                                  </div>
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold" onClick={() => update_sort(2)}>
                                  <div className="w-full flex flex-row items-center justify-between">
                                   Event
                                   <span>
                                    {sortIconState(sorting[2])}
                                   </span>
                                  </div>
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                                    Round
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                                    State
                                </th>
                            </TBRow>
                            <TBRowMobile className="table-row lg:hidden">
                                <th scope="col" className="px-5 py-3  text-slate-800 text-left text-sm uppercase font-bold rounded-tl-xl" onClick={() => update_sort(2)}>
                                  <div className="w-full flex flex-row items-center justify-between">
                                     Event
                                     <span>
                                      {sortIconState(sorting[2])}
                                     </span>
                                  </div>
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold rounded-tr-xl">
                                    Information
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800 text-left text-sm uppercase font-bold rounded-tl-xl" onClick={() => update_sort(1)}>
                                  <div className="w-full flex flex-row items-center justify-between">
                                     Gender
                                     <span>
                                      {sortIconState(sorting[1])}
                                     </span>
                                  </div>
                                </th>
                            </TBRowMobile>
                        </thead>
                        <tbody>
                          {sort(get(data)).map((item,i) => {
                            const upper = item.nome.toUpperCase();
                            if (search !== '' && !upper.includes(search.toUpperCase())) {
                              return (null)
                            }
                            return (
                              <TBRowFull key={`event-schedule-${item.id}`} event={item}/>
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

export default HocFetcherWithoutId(Schedule,`${process.env.NEXT_PUBLIC_API_ENDPOINT}/webservice/api/competitions/1/schedule`)
