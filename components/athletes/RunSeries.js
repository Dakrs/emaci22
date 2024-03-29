import { FilterSortTable } from '@components/common/table'
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';
import {useState} from 'react'
import Modal from '@components/common/modal'
import Image from 'next/image'
import { medal } from '@components/athletes/medals'



const RunSeries = ({data,id}) => {
  const states = Array(data.prova.count).fill(false);
  const [isOpen, setIsOpen] = useState(states)

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
      Header: 'Echelon',
      accessor: 'escalao'
    },
    {
      Header: 'Result',
      accessor: 'marca',
    }
  ]

  const closeI = (i) => {
    const res = Array(data.prova.count).fill(false);
    setIsOpen(res);
  }

  const openI = (i) => {
    const res = [...isOpen]
    res[i] = true
    setIsOpen(res);
  }

  const series = {}

  for (var [key, value] of Object.entries(data.prova.series)) {
      var processed_data = []
      var seriei = {}
      seriei.vento = value.info.vento;
      seriei.foto = value.info.foto;


      value.atletas.forEach((item, i) => {
        var atlethe = {}
        atlethe.nome = item.nome;
        atlethe.dorsal = item.dorsal;
        atlethe.clube = item.clube;
        atlethe.marca = item.obs_mar ? `${item.marca} (${item.obs_mar})` : item.marca;
        var pos_temp = item.obs_pos ? item.obs_pos : item.posicao;
        atlethe.posicao = [pos_temp,item.medalha]
        atlethe.escalao = item.escalao

        processed_data.push(atlethe)
      });



      seriei.atlethes = processed_data;
      series[key] = seriei;
  }


  return (
    <div className="w-full">
      {Object.keys(series).map((item,i) => (
        <div key={`${id}-results-${i}`} className="w-full">
          <div className={`flex w-full ${i % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex-col justify-between items-center`}>
            <div>
              <h2 className={`w-full font-bebas-neue select-none uppercase text-3xl sm:text-4xl font-black text-center ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} leading-none dark:text-write text-slate-800`}>{data.prova.final ? 'Final' : `Heat ${item}`}</h2>
              {series[item].vento && series[item].vento !== "" && (
                <h2 className={`w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} leading-none dark:text-write text-slate-800`}>Wind, {series[item].vento}</h2>
              )}
            </div>
            {series[item].foto && (
              <div className="flex items-center justify-center my-4">
                <div onClick={() => openI(i)} className="px-6 py-2 text-lg uppercase font-semibold text-center rounded text-white bg-green-300 hover:bg-green-400 cursor-pointer">Photofinish</div>
              </div>
            )}
          </div>
          <div className="py-8 ">
            <FilterSortTable dataI={series[item].atlethes} headers={headers} id={`${id}-results-${i}`}/>
          </div>
          {series[item].foto && (
          <Modal title={`Photofinish of serie ${item}`} state={isOpen[i]} close={() => closeI(i)}>
            <div className="w-full relative">
              <Image
                width={400}
                height={200}
                src={series[item].foto}
                alt={`Photofinish-${id}-serie-${i}`}
                objectFit="contain"
              />
            </div>
          </Modal>
          )}
        </div>
      ))}
    </div>
  )
}

export default RunSeries
