import TimeLeft from '@components/frontpage/timeLeft'
import Title from '@components/frontpage/title'
import PoweredBy from '@components/frontpage/poweredby'
import Visit from '@components/frontpage/visit'


/**
<div className="absolute -z-10 top-0 brightness-50 min-h-screen w-full lg:w-1/2 bg-yellow-200 bg-center bg-cover bg-banner-image-left">
</div>
<div className="absolute -z-10 top-0  brightness-50 left-1/2 min-h-screen w-0 lg:w-1/2 bg-center bg-cover bg-banner-image-right">
</div>
*/

export default function Home() {
  return (
      <div className="relative min-h-screen w-full">
        <div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
          <Title />
          <TimeLeft />
        </div>
        <div className="absolute -z-10 top-0 min-h-screen w-full bg-fixed bg-center bg-cover bg-banner-image-main">
        </div>

        <Visit />
        <PoweredBy />
      </div>
  )
}
