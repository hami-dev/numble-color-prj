export const calcSquareLength = (stage: number) => {
  return Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
};

export const calcSideLength = (stage: number) => {
  return Math.round((stage + 0.5) / 2) + 1;
};
