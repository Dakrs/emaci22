import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const GenericTab = ({data,id,render}) => {
  return (
    <div className="w-full sm:w-3/4 px-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-slate-700 rounded-xl overflow-x-scroll">
          {Object.keys(data).map((category) => (
            <Tab
              key={`${id}-${category}`}
              className={({ selected }) =>
                classNames(
                  'w-full break-words min-w-40 px-1 py-2.5 text-sm leading-5 font-medium text-slate-800 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-slate-700 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(data).map((posts, idx) => (
            <Tab.Panel
              key={`${id}-i-${idx}`}
              className={classNames(
                'bg-white rounded-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-gray-100"
                  >
                    {render(post)}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export {
  GenericTab
}
