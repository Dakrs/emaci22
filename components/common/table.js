import React, {useMemo,useState} from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce,useSortBy, usePagination } from 'react-table'
import  { matchSorter }  from 'match-sorter'
import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted } from 'react-icons/ti';

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

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200);

  return (
    <input
      value={value || ""}
      onChange={e => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`Search`}
      className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  )
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

const FilterSortTable = ({dataI,headers,id}) => {
  const data = React.useMemo(
     () => dataI,
     [dataI]
  )

  const columns = React.useMemo(
    () => headers,
    [headers]
  )

  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
     state: { globalFilter },
     visibleColumns,
     preGlobalFilteredRows,
     setGlobalFilter
  } = useTable({ columns, data, filterTypes },useGlobalFilter,useSortBy)

  return (
    <div className="min-w-full shadow-lg rounded-xl overflow-x-auto">
     <table {...getTableProps()} className="min-w-full leading-normal">
       <thead className="bg-zinc-50 rounded-xl">
         <tr>
           <th className="px-5 py-3  text-slate-800  text-center text-sm md:text-lg uppercase font-bold">
            Search:
           </th>
           <th colSpan={visibleColumns.length-1} className="px-5 py-3 bg-white text-slate-800  text-left text-sm uppercase font-bold">
             <GlobalFilter
               preGlobalFilteredRows={preGlobalFilteredRows}
               globalFilter={globalFilter}
               setGlobalFilter={setGlobalFilter}
             />
           </th>
         </tr>
         {headerGroups.map((headerGroup,i) => (
           <tr key={`${id}-header-${i}`} {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map((column,ci) => (
               <th key={`${id}-headerCol-${ci}`} {...column.getHeaderProps(column.getSortByToggleProps())} className="px-5 py-3 text-slate-800 text-left text-sm uppercase font-bold">
                 <div className="w-full flex flex-row justify-between">
                  {column.render('Header')}
                  {column.canSort && (
                    <span>
                     {column.isSorted
                       ? column.isSortedDesc
                         ? (<TiArrowSortedDown className="h-6 w-6" />)
                         : (<TiArrowSortedUp className="h-6 w-6" />)
                       : (<TiArrowUnsorted className="h-6 w-6" />)}
                    </span>
                  )}
                 </div>
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map((row,ri) => {
           prepareRow(row)
           return (
             <tr key={`${id}-row-${ri}`} {...row.getRowProps()}>
               {row.cells.map((cell,rci) => {
                 return (
                   <td key={`${id}-rowCell-${rci}`} {...cell.getCellProps()} className="px-5 py-3 text-left border-b border-gray-200 bg-white text-sm">{cell.render('Cell')}</td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
    </div>
  )
}

const FilterSortTableWithPage = ({dataI,headers,id}) => {
  const data = React.useMemo(
     () => dataI,
     [dataI]
  )

  const columns = React.useMemo(
    () => headers,
    [headers]
  )

  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
     state: { globalFilter },
     visibleColumns,
     preGlobalFilteredRows,
     setGlobalFilter,
     pageOptions,
     page,
     state: { pageIndex, pageSize },
     gotoPage,
     previousPage,
     nextPage,
     setPageSize,
     canPreviousPage,
     canNextPage,
  } = useTable({ columns, data, filterTypes, initialState: { pageSize: 10 } },useGlobalFilter,useSortBy,usePagination)

  return (
    <>
      <div className="min-w-full shadow-lg rounded-xl overflow-x-auto">
       <table {...getTableProps()} className="min-w-full leading-normal">
         <thead className="bg-zinc-50 rounded-xl">
           <tr>
             <th className="px-5 py-3  text-slate-800  text-center text-sm md:text-lg uppercase font-bold">
              Search:
             </th>
             <th colSpan={visibleColumns.length-1} className="px-5 py-3 bg-white text-slate-800  text-left text-sm uppercase font-bold">
               <GlobalFilter
                 preGlobalFilteredRows={preGlobalFilteredRows}
                 globalFilter={globalFilter}
                 setGlobalFilter={setGlobalFilter}
               />
             </th>
           </tr>
           {headerGroups.map((headerGroup,i) => (
             <tr key={`${id}-header-${i}`} {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map((column,ci) => (
                 <th key={`${id}-headerCol-${ci}`} {...column.getHeaderProps(column.getSortByToggleProps())} className="px-5 py-3 text-slate-800 text-left text-sm uppercase font-bold">
                   <div className="w-full flex flex-row justify-between">
                    {column.render('Header')}
                    {column.canSort && (
                      <span>
                       {column.isSorted
                         ? column.isSortedDesc
                           ? (<TiArrowSortedDown className="h-6 w-6" />)
                           : (<TiArrowSortedUp className="h-6 w-6" />)
                         : (<TiArrowUnsorted className="h-6 w-6" />)}
                      </span>
                    )}
                   </div>
                 </th>
               ))}
             </tr>
           ))}
         </thead>
         <tbody {...getTableBodyProps()}>
           {page.map((row,ri) => {
             prepareRow(row)
             return (
               <tr key={`${id}-row-${ri}`} {...row.getRowProps()}>
                 {row.cells.map((cell,rci) => {
                   return (
                     <td key={`${id}-rowCell-${rci}`} {...cell.getCellProps()} className="px-5 py-3 text-left border-b border-gray-200 bg-white text-sm">{cell.render('Cell')}</td>
                   )
                 })}
               </tr>
             )
           })}
         </tbody>
       </table>
      </div>
      <div className="w-full flex items-center justify-center mt-4">
        <div className="mx-4">
          <button className="px-6 py-2 text-lg font-semibold text-center rounded text-white bg-slate-700 hover:bg-slate-600" onClick={() => previousPage()} disabled={!canPreviousPage}>
             Prev
          </button>
        </div>
        <div className="mx-4">
          <div className="px-6 py-2 text-lg font-semibold text-center rounded text-white bg-slate-500">
             {pageIndex}
          </div>
        </div>
        <div className="mx-4">
          <button className="px-6 py-2 text-lg font-semibold text-center rounded text-white bg-slate-700 hover:bg-slate-600" onClick={() => nextPage()} disabled={!canNextPage}>
             Next
          </button>
        </div>
      </div>
    </>
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
  GenericTable,
  FilterSortTable,
  FilterSortTableWithPage
}
