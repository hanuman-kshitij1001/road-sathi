import { useState, useEffect } from 'react';
import { apiClient } from '../services/apiClient.js';

export const useHealthCheck = () => {
  const [status, setStatus] = useState('checking');
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const check = async () => {
      try {
        const res = await apiClient.get('/health');
        if (isMounted) {
          setStatus('connected');
          setData(res.data);
        }
      } catch {
        if (isMounted) {
          setStatus('disconnected');
        }
      }
    };

    check();
    const interval = setInterval(check, 15000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { status, data };
};
