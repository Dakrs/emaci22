//https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZScRnqz_JA0Rh10-9fnuu88&key=AIzaSyC0ELhFYuaAgYhBiZ23nUY6iMRxS6a9Ohk
//https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZScRnqz_JA0Rh10-9fnuu88&key=AIzaSyC0ELhFYuaAgYhBiZ23nUY6iMRxS6a9Ohk
export default function Home() {
  return (
      <div className="min-h-screen flex items-center justify-center w-full bg-slate-100">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-8 lg:py-0 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZScRnqz_JA0Rh10-9fnuu88&key=AIzaSyC0ELhFYuaAgYhBiZ23nUY6iMRxS6a9Ohk"></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="font-semibold mt-1">Altice Forum Braga</p>
                  <p className="mt-1">R. Monsenhor Airosa, 4705-002 Braga, Portugal</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a className="text-indigo-500 leading-relaxed">emaci.2020.info@gmail.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed">+351 924 489 968</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto rounded-lg w-full p-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">A few words about EMACI 2022</h2>
              <p className="text-md text-gray-500 mt-3 mb-1">The Council of the European Masters Association (EMA) has decided to assign Braga the organization of the thirteenth European Veterans Indoor Championships (EMACI), a competition aimed at athletes over 35 years of age, separated by age groups every five years and will take place, from February 20th to 27th, 2022, on the six-lane track of the new Altice Forum, located in the center of the city.</p>
              <h2 className="text-gray-900 text-lg my-1 font-medium title-font">{'Event\'s Main Website'}</h2>
              <a href="https://www.emaci2022braga.com/en" className="leading-relaxed mb-5 text-gray-600">https://www.emaci2022braga.com/en</a>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">{'Event\'s Duration'}</h2>
              <p className="leading-relaxed mb-5 text-gray-600">20 - 27 February 2022</p>
            </div>
          </div>
        </section>
      </div>
  )
}
