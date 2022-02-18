import Image from 'next/image'
import siteMeta from '@data/siteMeta.json'
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    partialVisibilityGutter: 30
  }
};

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
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay
              autoPlaySpeed={2500}
              centerMode={false}
              className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12"
              infinite
              itemClass=""
              responsive={responsive}
              sliderClass=""
              slidesToSlide={1}
              swipeable={false}
            >
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
            </Carousel>
        </div>
      </div>
    </section>
  )
}

export default PoweredBy;
