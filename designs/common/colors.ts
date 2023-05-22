const COLORS: { [key: string]: string } = {
  "purple-10": "#2d3143",
  "purple-20": "#282b37",
  "purple-30": "#252737",
  "purple-50": "#1c1f2b",
};

const getColor = ({ name, code }: { name: string; code: number }) =>
  COLORS[`${name}-${code}`];

export const PURPLE = (code: number) => getColor({ name: "purple", code });
