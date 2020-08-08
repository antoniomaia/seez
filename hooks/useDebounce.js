import { useState, useEffect } from 'react';

/**
 * This hook is designed to debounce any value update within our component's render function
 * @param value
 * @param delay
 * @returns {debouncedValue}
 */
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
