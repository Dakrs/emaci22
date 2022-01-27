const TBRowMobile = ({children}) => {
  return (
    <tr className="table-row md:hidden">
      {children}
    </tr>
  )
}

const TBRow = ({children}) => {
  return (
    <tr className="hidden md:table-row">
      {children}
    </tr>
  )
}

export {
  TBRowMobile,
  TBRow
}
