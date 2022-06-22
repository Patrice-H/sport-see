import { useState, useEffect } from 'react';
import { dataSRC } from '../config';

/**
 * Custom hook that fetches data from a URL and returns the data.
 * If data are not found redirect to error page
 *
 * @returns An object with data
 */
export const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!url || dataSRC !== 'API') return;
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => setData(data));
        } else {
          setData(response.status);
        }
      })
      .catch(() => {
        setData(500);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data };
};
