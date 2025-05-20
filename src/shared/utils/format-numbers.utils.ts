export const formatNumberWithCommas = (x: number, decimals = 2): string => {
  const parts = x.toFixed(decimals).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};
