import MediaTypePhotoWindow from '~/components/media/MediaTypePhotoWindow.vue';
import MediaTypeMovieWindow from '~/components/media/MediaTypeMovieWindow.vue';
import MediaTypeUnsupportedWindow from '~/components/media/MediaTypeUnsupportedWindow.vue';

export const PHOTO_LIBRARY_TYPE = 'photo';
export const MOVIE_LIBRARY_TYPE = 'movie';
export const SERIES_LIBRARY_TYPE = 'series';
export const COMICS_LIBRARY_TYPE = 'comics';

export const useLibraryType = () => {
  const types = [PHOTO_LIBRARY_TYPE, MOVIE_LIBRARY_TYPE, SERIES_LIBRARY_TYPE, COMICS_LIBRARY_TYPE];
  const isUnsupportedWindow = (type) => !types.includes(type);

  const component = (type) => {
    switch (type) {
      case PHOTO_LIBRARY_TYPE:
        return MediaTypePhotoWindow;
      case MOVIE_LIBRARY_TYPE:
        return MediaTypeMovieWindow;
      case SERIES_LIBRARY_TYPE:
      case COMICS_LIBRARY_TYPE:
      default:
        return MediaTypeUnsupportedWindow;
    }
  };

  return {
    PHOTO_LIBRARY_TYPE,
    MOVIE_LIBRARY_TYPE,
    SERIES_LIBRARY_TYPE,
    COMICS_LIBRARY_TYPE,

    types,
    component,
    isUnsupportedWindow,
  };
};
