export const useTruncate = (text, max = 300) => {
  text = text || '';
  const excerpt = text.trim().slice(0, max);
  const isTruncated = excerpt.length < text.length;

  return `${excerpt || ''}${isTruncated ? '...' : ''}`;
};
