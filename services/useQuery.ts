import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

const useQuery = <T>(api: Promise<AxiosResponse<T, Promise<T>>>) => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    api
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [api]);

  return { response, error, loading, refetch: fetchData };
};

export default useQuery;
