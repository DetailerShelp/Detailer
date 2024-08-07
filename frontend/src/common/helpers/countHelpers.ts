export const normalizeCount = (count: number) => {
  if (1000 <= count && count <= 999999) return `${(count / 1000).toFixed(1)}K`;
  else if (1000000 <= count && count <= 999999999) return `${(count / 1000000).toFixed(1)}M`;
  else return `${count}`;
};
