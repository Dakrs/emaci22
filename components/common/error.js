import Link from "next/link"

const Error = (props) => {
  const {code} = props;

  var msg, code_spec;

  switch (code) {
    case 404:
      msg = 'The page you’re looking for doesn’t exist.'
      code_spec = 'Page not found'
      break;
    default:
      msg = 'An unexpected error occurred, try again later'
      code_spec = 'Server Error'
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-slate-100">
      <div className="px-8 py-6 sm:px-20 sm:py-10 md:px-32 md:py-16 lg:px-40 lg:py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-slate-800 text-6xl xss:text-7xl sm:text-9xl">{code}</h1>

          <h6 className="mb-2 text-xl xss:text-2xl font-bold text-center text-slate-700 md:text-3xl">
            <span className="text-red-500">Oops!</span> {code_spec}
          </h6>

          <p className="mb-8 text-center text-gray-500 text-xs xss:text-md md:text-lg">
            {msg}
          </p>

          <Link href="/" passHref>
            <a className="px-6 py-2 text-lg font-semibold rounded text-white bg-slate-700 hover:bg-slate-600">Go home</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
