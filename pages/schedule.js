import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { CgTimelapse } from 'react-icons/cg';
import { FaClipboardList } from 'react-icons/fa';
import { GiPodium } from 'react-icons/gi';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import Link from "next/link";
import { TBRow, TBRowMobile } from '@components/common/table';



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
                  {event.date}
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className={`text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                  <BsGenderAmbiguous className="w-5 h-5 mr-2"  />
                  {event.sex}
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className={`text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                  <CgTimelapse className="w-5 h-5 mr-2"  />
                  {event.round}
                </div>
              </Menu.Item>
              <Menu.Item>
                {event.athletes ? (
                  <Link href={`/athletes/${event.id}`}>
                    <div className={`hover:text-white hover:bg-slate-800 cursor-pointer text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      <HiOutlineDocumentReport className="w-5 h-5 mr-2"  />
                      Athletes
                    </div>
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
                  <Link href={`/startlist/${event.id}`}>
                    <div className={`hover:text-white hover:bg-slate-800 cursor-pointer text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      <FaClipboardList className="w-5 h-5 mr-2"  />
                      Startlist
                    </div>
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
                  <Link href={`/results/${event.id}`}>
                    <div className={`hover:text-white hover:bg-slate-800 cursor-pointer text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      <GiPodium className="w-5 h-5 mr-2"  />
                      Results
                    </div>
                  </Link>
                ) : (
                  <div className={`text-gray-200 group cursor-not-allowed flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    <GiPodium className="w-5 h-5 mr-2"  />
                    Results
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

const TBRowFull = ({event,last}) => {
  return (
    <>
      <TBRow>
        <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm ${last ? 'rounded-bl-xl' : ''}`}>
          <p className="text-gray-900 whitespace-no-wrap">
              {event.date}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
              {event.sex}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
              {event.name}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
              {event.round}
          </p>
        </td>
        <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm`}>
          {event.athletes ?
            (<Link href={`/athletes/${event.id}`}>
                <p className="text-gray-900 hover:text-gray-500 whitespace-no-wrap cursor-pointer">
                    Athletes
                </p>
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
            (<Link href={`/startlist/${event.id}`}>
                <p className="text-gray-900 hover:text-gray-500 whitespace-no-wrap cursor-pointer">
                    Startlist
                </p>
             </Link>
            ):(
              <p className="text-gray-200 whitespace-no-wrap cursor-not-allowed">
                  Startlist
              </p>
            )
          }
        </td>
        <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm ${last ? 'rounded-br-xl' : ''}`}>
          {event.results ?
            (<Link href={`/results/${event.id}`}>
                <p className="text-gray-900 hover:text-gray-500 whitespace-no-wrap cursor-pointer">
                    Results
                </p>
             </Link>
            ):(
              <p className="text-gray-200 whitespace-no-wrap cursor-not-allowed">
                  Results
              </p>
            )
          }
        </td>
      </TBRow>
      <TBRowMobile>
        <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm ${last ? 'rounded-bl-xl' : ''}`}>
          <p className="text-gray-900 whitespace-no-wrap">
              {event.name}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
              {event.sex}
          </p>
        </td>
        <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm ${last ? 'rounded-br-xl' : ''}`}>
          <CompressedColumn event={event} />
        </td>
      </TBRowMobile>
    </>
  )
}

const examples = [
  {
    id: 123123123,
    date: '16:30',
    sex: 'Male',
    round: 'Qualification',
    name: 'Long Jump',
    startlist: true,
    results: true,
    athletes: true
  },
  {
    id: 12312312323,
    date: '16:30',
    sex: 'Male',
    round: 'Qualification',
    name: 'Long Jump',
    startlist: true,
    results: true,
    athletes: true
  },
  {
    id: 12312312331,
    date: '16:30',
    sex: 'Male',
    round: 'Qualification',
    name: 'Long Jump',
    startlist: false,
    results: false,
    athletes: true
  },
]

export default function Schedule() {
  const [index,setIndex] = useState(0);

  const next = () => {
    let i = index + 1;
    setIndex(i % days.length)
  }

  const prev = () => {
    let i = index - 1;

    if (i >= 0)
      setIndex(i % days.length)
    else
      setIndex(days.length - 1)

  }


  return (
      <div className="min-h-screen flex flex-col items-center w-full bg-slate-100 p-10 lg:p-16">
        <div className="flex w-full items-end justify-center md:justify-between">
          <div className="flex flex-row">
            <h1 onClick={prev} className="font-bebas-neue select-none uppercase text-i-5 sm:text-i-6 font-black text-left leading-none dark:text-write text-slate-800 mr-2 hover:text-slate-700 cursor-pointer" >{'\<'}</h1>
            <div className="flex flex-col">
              <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-left leading-none dark:text-write text-slate-800">{days[index].name}</h1>
              <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-left leading-none dark:text-write text-slate-800">{days[index].date}</h1>
            </div>
            <h1 onClick={next} className="font-bebas-neue select-none uppercase text-i-5 sm:text-i-6 font-black text-left leading-none dark:text-write text-slate-800 ml-2 hover:text-slate-700 cursor-pointer" >{'\>'}</h1>
          </div>
          <div className="hidden md:flex">
            <h1 className="font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-left leading-none dark:text-write text-slate-800">Competitions</h1>
          </div>
        </div>
        <div className="w-full">
            <div className="container mx-auto">
              <div className="py-8 ">
                <div className="inline-block min-w-full shadow-lg rounded-xl">
                    <table className="min-w-full leading-normal">
                        <thead className="bg-zinc-50 rounded-xl">
                            <TBRow>
                                <th scope="col" className="px-5 py-3  text-slate-800 text-left text-sm uppercase font-bold rounded-tl-xl">
                                    Local Time
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                                    Sex
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                                    Event
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                                    Round
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold">
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold rounded-tr-xl">
                                </th>
                            </TBRow>
                            <TBRowMobile className="table-row lg:hidden">
                                <th scope="col" className="px-5 py-3  text-slate-800 text-left text-sm uppercase font-bold rounded-tl-xl">
                                    Event
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800 text-left text-sm uppercase font-bold rounded-tl-xl">
                                    Sex
                                </th>
                                <th scope="col" className="px-5 py-3  text-slate-800  text-left text-sm uppercase font-bold rounded-tr-xl">
                                    Information
                                </th>
                            </TBRowMobile>
                        </thead>
                        <tbody>
                          {examples.map((item,i) => {
                            return (
                              <TBRowFull key={`event-schedule-${item.id}`} event={item} last={i == examples.length-1}/>
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
