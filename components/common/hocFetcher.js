import { SideLoading } from '@components/common/loading';
import Error from '@components/common/error';
import { fetcher,fetchMock } from '@utils/fetcher';
import useSWR from 'swr'

const HocFetcherWithoutId = (WrappedComponent, urlData) => {
  return HocFetcher(WrappedComponent, urlData, [null,false], true);
}

const HocFetcher = (WrappedComponent, urlData, testing = [null,false], ignoreId = false) => {

    const HOC = (props) => {
      const { id } = props;

      var [test_data,testing_flag] = testing;

      var url = urlData;
      var fetcherFinal = fetcher;

      if (!testing_flag && !ignoreId){
        if (!id)
          url = null
        else //add id to urldata when link is accomplished useSWR(`${urlData}/${id}`,fetcher)
          url = `${urlData}/${id}`
      }
      else if (testing_flag) {
        fetcherFinal = fetchMock(test_data)
      }

      const { data,error } = useSWR(url,fetcherFinal)

      if (error)
        return (<Error code={error.status} />)
      else if (!data){
        return(<SideLoading />);
      }

      return (
        <WrappedComponent data={data} {...props} />
      )
    }

    HOC.displayName = 'Hoc';

    return HOC;
}


export {
  HocFetcher,
  HocFetcherWithoutId
}
