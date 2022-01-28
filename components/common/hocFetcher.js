import { SideLoading } from '@components/common/loading';
import Error from '@components/common/error';
import { fetcher,fetchMock } from '@utils/fetcher';
import useSWR from 'swr'

const hocFetcherWithoutId = (WrappedComponent, urlData) => {
  return hocFetcher(WrappedComponent, urlData, [null,false], true);
}

const hocFetcher = (WrappedComponent, urlData, testing = [null,false], ignoreId = false) => props => {
  /**
  const { id } = props;

  if (!id)
    return(<SideLoading />);

  const { data,error } = useSWR(`${urlData}/${id}`,fetcher)*/

  const { id } = props;

  if (!ignoreId){
    if (!id)
      return(<SideLoading />);
  }

  var [test_data,testing_flag] = testing;

  if (!testing_flag)
    if (!ignoreId) //add id to urldata when link is accomplished
      var { data,error } = useSWR(`${urlData}`,fetcher)
    else
      var { data,error } = useSWR(`${urlData}`,fetcher)
  else {
    var { data,error } = useSWR(urlData,fetchMock(test_data))
  }

  if (error)
    return (<Error code={error.status} />)
  else if (!data){
    return(<SideLoading />);
  }

  return (
    <WrappedComponent data={data} {...props} />
  )
}


export {
  hocFetcher,
  hocFetcherWithoutId
}
