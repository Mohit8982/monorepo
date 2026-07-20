import { useCallback, useEffect, useRef, useState } from "react";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const optionsRef = useRef(options);
  const controllerRef = useRef(null);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  const fetchData = useCallback(
    async (signal) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          ...optionsRef.current,
          signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    },
    [url],
  );

  const executeFetch = useCallback(() => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    fetchData(controller.signal);
  }, [fetchData]);

  useEffect(() => {
    Promise.resolve().then(executeFetch);
    return () => controllerRef.current?.abort();
  }, [executeFetch]);

  const refetch = useCallback(() => {
    executeFetch();
  }, [executeFetch]);

  return {
    data,
    loading,
    error,
    refetch,
  };
};
