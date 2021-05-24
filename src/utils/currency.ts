export const convert = (fromBase: number, toBase: number, amount: number) => {
  if (!fromBase || !toBase) return 0;
  return (toBase / fromBase)  * amount;
};
