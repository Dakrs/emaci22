import { useRouter } from 'next/router';
import Link from "next/link"


const TemplateSection = ({title,subtitle, children,center}) => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <div className={`w-full flex flex-col text-center ${center ? '' : 'md:text-left'}`}>
        <h1 className="font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black leading-none dark:text-write text-slate-800">{title}</h1>
        {subtitle && (<h2 className="font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black leading-none dark:text-write text-slate-800">{subtitle}</h2>)}
      </div>
      <div className="w-full flex justify-center py-4 md:py-12">
        {children}
      </div>
    </div>
  )
}

const TitleSection = (props) => {
  const router = useRouter();
  const { title, subtitle, results, id } = props;

  return (
    <div className="w-full flex flex-col justify-center sm:flex-row sm:justify-between">
      <div className="flex flex-col justify-center">
        <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">{title}</h1>
        {subtitle && (<h2 className="w-full font-bebas-neue select-none uppercase text-2xl sm:text-3xl font-black text-center sm:text-left leading-none dark:text-write text-slate-800">{subtitle}</h2>)}
      </div>

      <div className="flex flex-col items-center justify-center my-4">
        <button onClick={() => router.back()} className="px-6 py-2 text-lg select-none font-semibold text-center rounded text-white bg-slate-700 hover:bg-slate-600">Go Back</button>
        {results === true && id && (
          <Link href={`/results/${id}`} passHref>
            <a className="w-32 md:w-full px-6 py-2 text-lg font-semibold text-center rounded text-white bg-green-300 hover:bg-green-400 mt-1">Results</a>
          </Link>
        )}
        {results === false && (
          <button disabled={true} className="w-32 md:w-full px-6 py-2 text-lg font-semibold text-center rounded text-white bg-gray-200 mt-1">Results</button>
        )}
      </div>
    </div>
  )
}


export {
  TemplateSection,
  TitleSection
};
