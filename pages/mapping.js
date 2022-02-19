import { useState } from 'react'
import { TemplateSection } from '@components/common/templateSection'
import { GenericTab } from '@components/common/tab'
import { GenericDisclose } from '@components/common/disclose'
import Link from "next/link"
import { HocFetcherWithoutId } from '@components/common/hocFetcher';

const days = {
  1: 'Day 1, 20 Feb',
  2: 'Day 2, 21 Feb',
  3: 'Day 3, 22 Feb',
  4: 'Day 4, 23 Feb',
  5: 'Day 5, 24 Feb',
  6: 'Day 6, 25 Feb',
  7: 'Day 7, 26 Feb',
  8: 'Day 8, 27 Feb',
}

const Mapping = (props) => {
  const { data } = props;

  const post = (item) => (
    <>
      <h3 className="text-sm font-medium leading-5 text-slate-800">
        {item.nome}
      </h3>
      <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-slate-800">
        <li>{days[item.dia]}</li>
        <li>&middot;</li>
        <li>{item.hora}</li>
        <li>&middot;</li>
        <li>Type - {item.tipo}</li>
      </ul>
      <Link href={{
          pathname: '/schedule',
          query: {
            day: item.dia - 1,
            searchq: item.nome
          }
        }}
        as="/schedule"

        passHref
      >
        <a className="absolute inset-0 rounded-md focus:z-10"/>
      </Link>
    </>
  )

  const sortFunc = (ev1,ev2) => {
    if (ev1.prova > ev2.prova)
      return 1
    if (ev1.prova < ev2.prova)
      return -1
    return 0
  }

  const contests = data.map.sort(sortFunc)
  //<GenericTab data={categories} id="tap-mapping" render={post} />


  return (
    <TemplateSection title="Mapping" subtitle="Search for a competition using a category" center={true}>
      <GenericDisclose data={data.map} id="tap-mapping" render={post} keyName={(item) => (item.prova)} dataFunc={(item) => (item.mapa)} />
    </TemplateSection>
  )
}

export default HocFetcherWithoutId(Mapping,`${process.env.NEXT_PUBLIC_API_ENDPOINT}/webservice/api/competitions/1/map`)
