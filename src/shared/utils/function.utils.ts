export const debounce = <T extends (...args: Array<any>) => void>(func: T, delay: number) => {
  let timeoutId;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
