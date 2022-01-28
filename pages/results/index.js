import React, {useMemo,useState} from 'react'
import { FilterSortTable } from '@components/common/table'
import Flags from 'country-flag-icons/react/3x2';
import {translate2to3} from '@utils/flags';


const Results = (props) => {

  const examples = {"prova": {"nome": "1.500 metros - SERIE B", "dia": 1, "count": 1, "series": {"1": [{"nome": "Saoud Jouma AL Zaabi", "dorsal": 134, "clube": "UAE"}, {"nome": "Pedro V\u00e1zquez Bueno", "dorsal": 139, "clube": "ESP"}, {"nome": "Filipe Vitorino", "dorsal": 142, "clube": "CNRM"}, {"nome": "Gon\u00e7alo Casimiro", "dorsal": 135, "clube": "CBF"}, {"nome": "Jo\u00e3o Cruz", "dorsal": 128, "clube": "MAC"}, {"nome": "Marco Teixeira", "dorsal": 141, "clube": "IND"}, {"nome": "David Azevedo", "dorsal": 136, "clube": "JV"}, {"nome": "Paulo Ros\u00e1rio", "dorsal": 125, "clube": "SCB"}, {"nome": "Carlos Porto", "dorsal": 131, "clube": "ESP"}, {"nome": "Pablo Bocelo Bellas", "dorsal": 133, "clube": "ESP"}, {"nome": "Carlos Lopez Moral", "dorsal": 137, "clube": "ESP"}, {"nome": "Lu\u00eds Monteiro", "dorsal": 126, "clube": "SCP"}, {"nome": "Miguel Ribeiro", "dorsal": 138, "clube": "ACRSD"}, {"nome": "Jorge Puig Malvar", "dorsal": 132, "clube": "ESP"}, {"nome": "Jo\u00e3o Alves Lopes", "dorsal": 130, "clube": "SCB"}, {"nome": "R\u00faben Amaral", "dorsal": 47, "clube": "SCP"}, {"nome": "Emanuel Rolim", "dorsal": 124, "clube": "MAC"}, {"nome": "Bruno Silva", "dorsal": 140, "clube": "MAC"}]}}}

  const prepare_data = (key) => {
    const res = []

    examples.prova.series[key].forEach((item, i) => {
      var Flag = Flags[translate2to3(item.clube)];
      res.push({
        nome: item.nome,
        dorsal: item.dorsal,
        clube: item.clube
      })
    });

    return res;
  }

  const headers = [
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
             <p>{value}</p>
             <Flag className="h-6 w-8 ml-1" />
          </div>
        )
      }
    }
  ]

  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <FilterSortTable dataI={prepare_data("1")} headers={headers} />
    </div>
  )
}

export default Results
