import React, {useMemo,useState} from 'react'
import { FilterSortTable } from '@components/common/table'
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';
import { HocFetcher } from '@components/common/hocFetcher';
import Link from "next/link";
import { medal } from '@components/athletes/medals';
import { TitleSection } from '@components/common/templateSection';
import jsPDF from "jspdf";
import "jspdf-autotable";

const ResultsMulti = (props) => {

  const {data,id} = props;

  //{"nome": "Ussumani", "clube": "AABV", "dorsal": 111, "posicao": 1, "pontos": 2709, "resultados": [496, 366, 687, 520, 640]}

  const headers = [
    {
        Header: 'Pos',
        accessor: 'posicao',
        Cell: medal
    },
    {
      Header: 'BIB',
      accessor: 'dorsal'
    },
    {
      Header: 'Name',
      accessor: 'nome',
    },
    {
      Header: 'Country',
      accessor: 'clube',
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
      Header: 'Points',
      accessor: 'pontos',
    }
  ]

  const processed_data = []

  data.prova.header.forEach((item, i) => {
    headers.push({
      Header: item,
      accessor: `res${i}`
    })
  });


  data.prova.resultados.forEach((item, i) => {
    const entry = {...item}

    for(var i = 0; i < data.prova.provas; i++){
      if (i < data.prova.provas_realizadas){
        entry[`res${i}`] = entry.resultados[i]
      }
      else {
        entry[`res${i}`] = ""
      }
    }
    entry.posicao = [item.posicao, 'medalha' in item ? item.medalha : null ]

    processed_data.push(entry)
  });

  const exportPDF = (stream,headers,name) => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 40;
    const docheaders = [headers.map((item) => item.Header)];

    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);

    const getmedalha = (type) => {
      if (type === 'G')
        return 'Gold'

      if (type === 'S')
        return 'Silver'

      if (type === 'B')
        return 'Bronze'
    }

    const dataAt = processed_data.map((item) => {
      var pos = item.posicao[1] ? `${item.posicao[0]} (${getmedalha(item.posicao[1])})` : item.posicao[0];

      const temp = [
        pos, item.dorsal, item.nome, item.clube, item.pontos
      ]

      for(var i = 0; i < data.prova.provas_realizadas; i++){
        temp.push(item[`res${i}`])
      }

      return temp
    })

    const content = {
      startY: 50,
      head: docheaders,
      body: dataAt
    };

    doc.text(name, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`${name}.pdf`)
  }


  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <TitleSection title={data.prova.nome} subtitle="Results" />
      <div className="w-full py-4">
          <div className="container mx-auto mb-4">
            <FilterSortTable dataI={processed_data} headers={headers} id={`comb-results-${id}`}/>
          </div>
          <div onClick={() => exportPDF(processed_data,headers,data.prova.nome)} className="w-full bg-cyan-400 cursor-pointer hover:bg-cyan-500 rounded-md text-white text-center font-bold py-4">
            Export results as pdf.
          </div>
      </div>
    </div>
  )
}

export default HocFetcher(ResultsMulti,`${process.env.NEXT_PUBLIC_API_ENDPOINT}/webservice/api/event/comb`)

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = []
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  return { props: { id: params.id } }
}
