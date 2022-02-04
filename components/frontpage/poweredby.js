/**
const PoweredBy = (props) => {
  return (
    <div className="w-full px-4 py-6 sm:p-10 lg:p-16 bg-slate-200">
      <div className="w-full flex justify-end flex-col">
        <h1 className="w-full font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black text-center sm:text-right leading-none dark:text-write text-slate-800">Powered By</h1>
      </div>
      <div className="container mx-auto">
      </div>
    </div>
  )
}*/
import Image from 'next/image'
import siteMeta from '@data/siteMeta.json'


const PoweredBy = (props) => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          <div className="flex items-center p-8 bg-gray-100 rounded">
            <div className="mx-auto text-center lg:text-left">
              <h2 className="text-4xl font-bold">
                Powered By
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
            {siteMeta.poweredby.map((sponsor,i) => (
              <a key={`sponsor-${i}`} href={sponsor.link ? sponsor.link : ''} className="block">
                <div className={`relative h-32`}>
                  <Image
                    layout="fill"
                    loading="lazy"
                    alt={sponsor.alt}
                    objectFit="contain"
                    className="rounded"
                    src={sponsor.src}
                  />
                </div>

                <div className="mt-2">
                  <h5 className="font-medium text-center">
                    {sponsor.name}
                  </h5>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PoweredBy;
