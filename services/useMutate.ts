import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type UseMutateResponse<T> = {
  response: T | null;
  error: any;
  loading: boolean;
};

type UseMutateFn<T> = (data?: any) => Promise<UseMutateResponse<T>>;

function useMutate<T>(
  url: string,
  config?: AxiosRequestConfig,
): [UseMutateFn<T>, UseMutateResponse<T>] {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const mutate: UseMutateFn<T> = async (data?: any) => {
    setLoading(true);
    try {
      const response: AxiosResponse<T> = await axios.post(url, data, config);
      setResponse(response.data);
      setError(null);
      setLoading(false);
      return { response: response.data, error: null, loading: false };
    } catch (error) {
      setError(error);
      setLoading(false);
      return { response: null, error, loading: false };
    }
  };

  return [mutate, { response, error, loading }];
}

export default useMutate;
