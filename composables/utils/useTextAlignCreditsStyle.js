export const useTextAlignCreditsStyle = (text, space = 20) => {
  const dots = '.'.repeat(space - text.length);
  return `${text} ${dots}`;
};
