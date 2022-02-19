import { TitleSection } from '@components/common/templateSection';
import { GenericDiscloseData } from '@components/common/disclose';
import { HocFetcherWithoutId } from '@components/common/hocFetcher';
import { FilterSortTableWithPage } from '@components/common/table'
import { medal } from '@components/athletes/medals'
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';



const CollectiveResults = (props) => {
  const { data } = props;

  const headers = [
    {
        Header: 'Pos',
        accessor: 'posicao',
        Cell: medal
    },
    {
      Header: 'Country',
      accessor: 'nome',
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
      Header: 'Score',
      accessor: 'pontos'
    }
  ]

  const post = (items) => {

    const dta = items.atletas.map((item) => {
      return (
        {
          ...item,
          posicao: [item.posicao,item.medalha]
        }
      )
    })

    return (
      <div>
        <h3 className="text-2xl font-medium text-center leading-5 text-slate-800 mb-4">
          Results
        </h3>
        <FilterSortTableWithPage dataI={dta} headers={headers} id={`collect-${items.nome}-`}/>
      </div>
    )
  }

  //"posicao": 1, "nome": "POR", "pontos": 23.0, "medalha": "G"

  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <TitleSection title="Collective" subtitle="Results"/>
      <GenericDiscloseData data={data.coletivas} id="tap-mapping" render={post} keyName={(item) => (item.nome)} className="py-8" />
    </div>
  )
}

export default HocFetcherWithoutId(CollectiveResults,`${process.env.NEXT_PUBLIC_API_ENDPOINT}/webservice/api/competitions/1/coletives`)
