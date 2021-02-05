import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const useRedirect = routeTo => {
  const [loading, isLoading] = useState(false);
  const router = useRouter();

  const makeRouteTo = () => {
    isLoading(true);
    router.push(routeTo);
  };

  useEffect(() => {
    makeRouteTo();
  }, []);

  return loading;
};

export default useRedirect;
