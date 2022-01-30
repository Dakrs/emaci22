import React, {useMemo,useState} from 'react'
import { FilterSortTable } from '@components/common/table'
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';
import { HocFetcherWithoutId } from '@components/common/hocFetcher';


const Results = (props) => {

  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      teste
    </div>
  )
}

export default HocFetcherWithoutId(Results,'https://fpacompeticoes.pt/webservice/api/event/results/9353')
