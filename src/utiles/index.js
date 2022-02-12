export const sortString = (str) => {
  return (a, b) => (a[str] > b[str] ? 1 : -1);
};
