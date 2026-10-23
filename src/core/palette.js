export const officePalettes = {
  red: ['#C00000', '#E53935', '#F25F5C', '#F4A6A6', '#FDE8E8'],
  orange: ['#C65911', '#ED7D31', '#F4B183', '#F8CBAD', '#FCE4D6'],
  green: ['#548235', '#70AD47', '#8BC34A', '#A9D18E', '#E2F0D9'],
  blue: ['#2F5597', '#4472C4', '#5B9BD5', '#9DC3E6', '#D9EAF7'],
  purple: ['#7030A0', '#8064A2', '#9E6BC4', '#C9B2DC', '#E4D7EF'],
  gray: ['#404040', '#7F7F7F', '#A6A6A6', '#D9D9D9', '#F2F2F2'],
};

export const nodePalette = Object.entries(officePalettes).flatMap(([group, colors]) =>
  colors.map((color, i) => [`${group} ${i + 1}`, color, group]),
);

export const DEFAULT_NODE_COLOR = '#4472C4';
export const DEFAULT_EDGE_COLOR = '#7F7F7F';
