export const cn = (...classes) => classes.filter(Boolean).join(' ');

export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
};
