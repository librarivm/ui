import { useLibraryType } from '~/composables/types/useLibraryType.js';

export const useResolveIconComponentFromType = (type) => {
  const { PHOTO_LIBRARY_TYPE, MOVIE_LIBRARY_TYPE, SERIES_LIBRARY_TYPE, COMICS_LIBRARY_TYPE } =
    useLibraryType();

  switch (type) {
    case MOVIE_LIBRARY_TYPE:
      return 'FilmIcon';
    case SERIES_LIBRARY_TYPE:
      return 'TvIcon';
    case COMICS_LIBRARY_TYPE:
      return 'ComicsSpeechBubbleIcon';
    case PHOTO_LIBRARY_TYPE:
      return 'ImageIcon';
    default:
      return null;
  }
};
