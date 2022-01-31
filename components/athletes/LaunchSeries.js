import { FilterSortTable } from '@components/common/table'
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';
import {useState} from 'react'

const LaunchSeries = ({data,id}) => {

  const series = {}

  for (var [key, value] of Object.entries(data.prova.series)) {
      var processed_data = []
      var seriei = {}
      seriei.vento = value.info.vento;

      value.atletas.forEach((item, i) => {
        var atlethe = {}
        atlethe.nome = item.nome;
        atlethe.dorsal = item.dorsal;
        atlethe.clube = item.clube;
        atlethe.marca = item.obs_mar ? `${item.marca} (${item.obs_mar})` : item.marca;
        atlethe.posicao = item.obs_pos ? item.obs_pos : item.posicao;

        var temp_res = item.resultados.split(',')
        for(var i = 0; i < value.info.lancamentos; i++){
          if (i < temp_res.length){
            atlethe[`res${i}`] = temp_res[i]
          }
          else{
            atlethe[`res${i}`] = ""
          }
        }

        processed_data.push(atlethe)
      });


      var headers = [
        {
            Header: 'Position',
            accessor: 'posicao'
        },
        {
          Header: 'Code',
          accessor: 'dorsal'
        },
        {
          Header: 'Name',
          accessor: 'nome',
        },
        {
          Header: 'Nacionality',
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
          Header: 'Result',
          accessor: 'marca',
        }
      ]

      for(var i = 0; i < value.info.lancamentos; i++){
        headers.push({
          Header: `${i+1}`,
          accessor: `res${i}`,
          disableSortBy: true
        })
      }

      seriei.atlethes = processed_data;
      seriei.headers = headers;
      series[key] = seriei;
  }


  return (
    <div className="w-full">
      {Object.keys(series).map((item,i) => (
        <div key={`${id}-results-${i}`} className="w-full">
          <div className={`flex w-full ${i % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex-col justify-between item-center`}>
            <div>
              <h2 className={`w-full font-bebas-neue select-none uppercase text-3xl sm:text-4xl font-black text-center ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} leading-none dark:text-write text-slate-800`}>Serie {item}</h2>
              {series[item].vento && series[item].vento !== "" && (
                <h2 className={`w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} leading-none dark:text-write text-slate-800`}>Wind, {series[item].vento}</h2>
              )}
            </div>
          </div>
          <div className="py-8 ">
            <FilterSortTable dataI={series[item].atlethes} headers={series[item].headers} id={`${id}-results-${i}`}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LaunchSeries;
