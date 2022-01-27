const LoadingAbsolute = (props) => {
  return (
    <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
      <span className="text-slate-800 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
        <i className="fas fa-circle-notch fa-spin fa-5x"></i>
      </span>
    </div>
  )
}

const Loading = (props) => {
  return (
    <div className="flex w-full h-full flex-row z-50">
      <span className="text-slate-800 my-0 mx-auto">
        <i className="fas fa-circle-notch fa-spin fa-5x"></i>
        <p className="mt-2 text-center">Loading</p>
      </span>
    </div>
  )
}

const SideLoading = (props) => {
  return (
    <div className="min-h-screen flex flex-row items-center justify-center w-full bg-slate-100 p-10 lg:p-16">
      <Loading />
    </div>
  )
}

export {
  LoadingAbsolute,
  Loading,
  SideLoading
}
