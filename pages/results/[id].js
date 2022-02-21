import React, {useMemo,useState} from 'react'
import { FilterSortTable } from '@components/common/table'
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';
import { HocFetcher } from '@components/common/hocFetcher';
import Link from "next/link"
import RunSeries from '@components/athletes/RunSeries';
import LaunchSeries from '@components/athletes/LaunchSeries';
import VerticalJumpSeries from '@components/athletes/VerticalJumpSeries';
import HorizontalJumpSeries from '@components/athletes/HorizontalJumpSeries';
import CourierSeries from '@components/athletes/CourierSeries';
import { TitleSection } from '@components/common/templateSection';
import jsPDF from "jspdf";
import "jspdf-autotable";


const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const Results = (props) => {

  const {data,id} = props;

  var component = null;

  /**
  tipop 4 : lancamentos

  tipo 3 : saltos horizontais
  tipo 2 : saltos verticais
  */

  switch (data.prova.tipo) {
    case 2: //
      component = (<VerticalJumpSeries data={data} id={id} />)
      break;
    case 3: //
      component = (<HorizontalJumpSeries data={data} id={id} />)
      break;
    case 4: //
      component = (<LaunchSeries data={data} id={id}/>)
      break;
    case 5:
      component = (<CourierSeries data={data} id={id}/>)
      break;
    default:
      component = (<RunSeries data={data} id={id}/>)
  }

  const exportPDF = (data) => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const headers = [["POS","BIB","NAME","COUNTY","RESULT"]];

    const group = groupBy(data.prova.series["1"].atletas,'escalao')

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

    for (var [key, value] of Object.entries(group)){
      const title = `${data.prova.nome} | ${key}`
      const dataAt = value.map(elt => {
        var pos = elt.obs_pos ? elt.obs_pos : elt.posicao;
        pos = elt.medalha ? `${pos} (${getmedalha(elt.medalha)})` : pos;
        var marca = elt.obs_mar ? `${elt.marca} (${elt.obs_mar})` : elt.marca;
        return (
          [pos, elt.dorsal, elt.nome ,elt.clube,marca]
        )
      });

      const content = {
        startY: 50,
        head: headers,
        body: dataAt
      };

      doc.text(title, marginLeft, 40);
      doc.autoTable(content);
      doc.addPage(size,orientation)
    }

    doc.save(`${data.prova.nome}.pdf`)
  }

  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <TitleSection title={data.prova.nome} subtitle="Results" export={data.prova.final} />
      <div className="w-full py-4">
          <div className="container mx-auto">
            {component}
          </div>
      </div>
      {data.prova.final && (
        <div onClick={() => exportPDF(data)} className="w-full bg-cyan-400 cursor-pointer hover:bg-cyan-500 rounded-md text-white text-center font-bold py-4">
          Export results as pdf.
        </div>
      )}
    </div>
  )
}

export default HocFetcher(Results,`${process.env.NEXT_PUBLIC_API_ENDPOINT}/webservice/api/event/results`)

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
