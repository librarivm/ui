import { useLibraryType } from '~/composables/types/useLibraryType.js';

export const useResolveIconComponentFromType = (type) => {
  const {
    PHOTO_LIBRARY_TYPE,
    MOVIE_LIBRARY_TYPE,
    SERIES_LIBRARY_TYPE,
    BOOK_LIBRARY_TYPE,
    COMICS_LIBRARY_TYPE,
    MANGA_LIBRARY_TYPE,
    MUSIC_LIBRARY_TYPE,
  } = useLibraryType();

  switch (type) {
    case MOVIE_LIBRARY_TYPE:
      return 'FilmIcon';
    case SERIES_LIBRARY_TYPE:
      return 'TvIcon';
    case BOOK_LIBRARY_TYPE:
      return 'BookTextIcon';
    case COMICS_LIBRARY_TYPE:
      return 'BookComicsIcon';
    case MANGA_LIBRARY_TYPE:
      return 'BookMangaIcon';
    case PHOTO_LIBRARY_TYPE:
      return 'ImageIcon';
    case MUSIC_LIBRARY_TYPE:
      return 'MusicIcon';
    default:
      return null;
  }
};
