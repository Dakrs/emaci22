import { RiMedalLine } from 'react-icons/ri';

const medal = ({value}) => (
  <div className="w-full flex flex-row items-center justify-start">
    <p>{value[0]}</p>
    {value[1] !== null && (
      <RiMedalLine className={`${value[1] === 'G' ? 'text-yellow-400' : (value[1] === 'S' ? 'text-gray-300' : 'text-amber-900')} h-6 w-6 ml-1`} />
    )}
  </div>
)

export {
  medal
}
