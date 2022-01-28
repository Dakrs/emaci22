const TBRowMobile = ({children}) => {
  return (
    <tr className="table-row md:hidden">
      {children}
    </tr>
  )
}

const TBRow = ({children}) => {
  return (
    <tr className="hidden md:table-row">
      {children}
    </tr>
  )
}


const GenericTable = ({data,headers,id,mapping}) => {

  return (
    <div className="min-w-full shadow-lg rounded-xl overflow-x-auto">
      <table className="min-w-full leading-normal">
        <thead className="bg-zinc-50 rounded-xl">
          <tr>
            {headers.map((item,i) => {
              return (
                <th key={`gentable-${id}-header-${i}`} scope="col" className="px-5 py-3  text-slate-800 text-left text-sm uppercase font-bold">
                    {item}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          { data.map((item,i) => (
            <tr key={`gentable-${id}-data-${i}`}>
              {headers.map((key) => {
                return (
                  <td key={`gentable-${id}-${key}-${i}`} scope="col" className="px-5 py-3 text-left border-b border-gray-200 bg-white text-sm">
                      {item[mapping(key)]}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export {
  TBRowMobile,
  TBRow,
  GenericTable
}
