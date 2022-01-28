const fetcher = async url => {
  /**
  var res;

  try{
    res = await fetch(url)
  }
  catch (e){

    const error = new Error('An error occurred while fetching the data.')
    error.info = 'Unexpected Error'
    error.status = 500

    throw error
  }*/

  const res = await fetch(url)

  if (!res.ok) {    
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    //error.info = await res.json()
    error.status = res.status

    throw error
  }


  return res.json()
}

const mock = (success, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(success) {
        resolve();
      } else {
        reject({message: 'Error'});
      }
    }, timeout || 1000);
  });
}

const fetchMock = (data) => async (url) => {
  await mock(true,500);
  return data
}

export {
  fetcher,
  fetchMock
}
