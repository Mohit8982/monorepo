import { useCallback, useRef } from "react";

const useDebounce = (func, delay = 1000) => {
  const timerRef = useRef(null);

  return useCallback(
    (...args) => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay],
  );
};

export default useDebounce;
