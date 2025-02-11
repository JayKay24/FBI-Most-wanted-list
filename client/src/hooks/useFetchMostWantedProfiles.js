import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMostWantedProfiles = (path, search, page = 1, limit = 10) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    (async function() {
      setIsLoading(true);
      try {
        const { data: res } = await axios.get(path, {
          params: {
            page,
            limit,
            search
          }
        });
        setData(res);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })()
  }, [path, page, limit, search]);

  return { data, isLoading };
};

export default useFetchMostWantedProfiles;
