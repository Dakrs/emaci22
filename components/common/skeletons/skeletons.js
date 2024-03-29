const MultipleCardSkeleton = (props) => {
  return (
    <div className="bg-white p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
      <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse"></div>
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
        </div>
        <div className="mt-auto flex gap-3">
          <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
          <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
          <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" ></div>
        </div>
      </div>
    </div>
  )
}

const VerticalCardSkeleton = ({size,rounded}) => {

  var size_temp;

  switch (size) {
    case 'small':
      size_temp = 'sm:h-58'
      break;
    case 'medium':
      size_temp = 'sm:h-64'
      break;
    case 'big':
      size_temp = 'sm:h-80'
      break;
    default:
      size_temp = 'sm:h-64'

  }

  return (
    <div className={`bg-white p-2 sm:p-4 ${size_temp} ${rounded ? rounded : 'rounded-2xl' } shadow-lg flex flex-col sm:flex-row gap-5 select-none`}>
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
        </div>
        <div className="mt-auto flex gap-3">
          <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
          <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
          <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" ></div>
        </div>
      </div>
    </div>
  )
}

//<div className="bg-gray-200 w-full h-4 animate-pulse rounded-full" ></div> col-span-2
const TableSkeleton = (props) => {
  return (
    <div className="w-full p-4 max-w-md shadow-xl bg-white rounded-2xl mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 bg-gray-200 h-4 animate-pulse rounded-full"></div>
        <div className="bg-gray-200 h-4 animate-pulse rounded-full"></div>
        <div className="bg-gray-200 h-4 animate-pulse rounded-full"></div>
        <div className="bg-gray-200 h-4 animate-pulse rounded-full"></div>
        <div className="col-span-2 bg-gray-200 h-4 animate-pulse rounded-full"></div>
        <div className="bg-gray-200 h-4 animate-pulse rounded-full"></div>
        <div className="bg-gray-200 h-4 animate-pulse rounded-full"></div>
        <div className="col-span-2 bg-gray-200 h-4 animate-pulse rounded-full"></div>
        <div className="col-span-3 bg-gray-200 h-4 animate-pulse rounded-full"></div>
      </div>
    </div>
  )
}

export {
  MultipleCardSkeleton,
  TableSkeleton,
  VerticalCardSkeleton
}
