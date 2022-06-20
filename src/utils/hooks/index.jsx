import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataSRC } from '../config';

/**
 * Custom hook that fetches data from a URL and returns the data.
 * If data are not found redirect to error page
 *
 * @returns An object with data
 */
export const useFetch = (url) => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!url || dataSRC !== 'API') return;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => setData(data));
        } else {
          navigate('/error404');
        }
      })
      .catch((error) => {
        navigate('/error500');
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data };
};
