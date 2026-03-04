import { useState, useEffect } from 'react';

type UseFetchDataProps = {
  url: string;
};

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

export const useFetchData = <T>({ url }: UseFetchDataProps): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data: T = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error });
      }
    };

    fetchData();
  }, [url]);

  return state;
};
