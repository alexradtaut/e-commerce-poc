export const getBasketTotal = basket => {
  const initialValue = 0;
  return basket?.reduce((previous, current) => {
    return previous + current.price;
  }, initialValue);
};
