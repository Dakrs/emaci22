import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const GenericDisclose = ({data,id,render,keyName,dataFunc}) => {
  return (
    <div className="w-full">
      <div className="w-full max-w-3xl p-2 mx-auto bg-white rounded-2xl">
          {data.map((category,idx) => (
            <Disclosure key={`${id}-${keyName(category)}`} as="div" className={idx === 0 ? '' : 'mt-2'}>
              {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-slate-800 rounded-lg hover:bg-slate-700 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                      <span>{keyName(category)}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                      <ul>
                        {dataFunc(category).map((item, idx2) => (
                          <li key={`${id}-${keyName(category)}-${idx2}`} className={`relative p-3 rounded-md bg-slate-100/60 hover:bg-slate-100 ${idx2 === 0 ? '' : 'mt-2'}`}>
                            {render(item)}
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
            </Disclosure>
          ))}
      </div>
    </div>
  )
}

const GenericDiscloseData = ({data,id,render,keyName,className}) => {
  return (
    <div className={`w-full ${className ? className : ''}`}>
      <div className="w-full max-w-3xl p-2 mx-auto bg-white rounded-2xl">
          {data.map((category,idx) => (
            <Disclosure key={`${id}-${keyName(category)}`} as="div" className={idx === 0 ? '' : 'mt-2'}>
              {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-slate-800 rounded-lg hover:bg-slate-700 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                      <span>{keyName(category)}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                      {render(category)}
                    </Disclosure.Panel>
                  </>
                )}
            </Disclosure>
          ))}
      </div>
    </div>
  )
}

export {
  GenericDisclose,
  GenericDiscloseData
}
