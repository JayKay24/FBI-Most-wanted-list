import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchWantedProfiles = (path, page = 1, limit = 10) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    (async function() {
      setIsLoading(true);
      try {
        const { data: res } = await axios.get(path, {
          params: {
            page,
            limit
          }
        });
        setData(res);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })()
  }, [path, page, limit]);

  return { data, isLoading };
};

export default useFetchWantedProfiles;
