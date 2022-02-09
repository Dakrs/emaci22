const TemplateSection = ({title, children,center}) => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-100 px-4 py-6 sm:p-10 lg:p-16">
      <div className={`w-full flex justify-center ${center ? '' : 'md:justify-start'} `}>
        <h1 className="font-bebas-neue select-none uppercase text-4xl sm:text-5xl font-black leading-none dark:text-write text-slate-800">{title}</h1>
      </div>
      <div className="w-full flex justify-center py-4 md:py-12">
        {children}
      </div>
    </div>
  )
}


export default TemplateSection;
