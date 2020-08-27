import React from 'react';
import api from '../api';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    try {
      setError(null);
      setLoading(true);
      response = await api(url, options);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      return { response };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
