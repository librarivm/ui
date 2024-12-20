import MediaTypePhotoWindow from '~/components/media/MediaTypePhotoWindow.vue';
import MediaTypeUnsupportedWindow from '~/components/media/MediaTypeUnsupportedWindow.vue';
import ImageIcon from '~/components/icons/ImageIcon.vue';
import FilmIcon from '~/components/icons/FilmIcon.vue';
import TvIcon from '~/components/icons/TvIcon.vue';
import ComicsSpeechBubbleIcon from '~/components/icons/ComicsSpeechBubbleIcon.vue';
import FolderOpenIcon from '~/components/icons/FolderOpenIcon.vue';
import MusicIcon from '~/components/icons/MusicIcon.vue';
import VideoIcon from '~/components/icons/VideoIcon.vue';
import MediaTypeItemsStripWindow from '~/components/media/MediaTypeItemsStripWindow.vue';

export const PHOTO_LIBRARY_TYPE = 'photo';
export const VIDEO_LIBRARY_TYPE = 'video';
export const MOVIE_LIBRARY_TYPE = 'movie';
export const SERIES_LIBRARY_TYPE = 'series';
export const MUSIC_LIBRARY_TYPE = 'music';
export const COMICS_LIBRARY_TYPE = 'comics';

export const useLibraryType = () => {
  const types = [
    PHOTO_LIBRARY_TYPE,
    VIDEO_LIBRARY_TYPE,
    MOVIE_LIBRARY_TYPE,
    SERIES_LIBRARY_TYPE,
    MUSIC_LIBRARY_TYPE,
    COMICS_LIBRARY_TYPE,
  ];
  const isUnsupportedWindow = (type) => !types.includes(type);

  const component = (type) => {
    switch (type) {
      case PHOTO_LIBRARY_TYPE:
        return MediaTypePhotoWindow;
      case MOVIE_LIBRARY_TYPE:
      case COMICS_LIBRARY_TYPE:
        return MediaTypeItemsStripWindow;
      case VIDEO_LIBRARY_TYPE:
      case SERIES_LIBRARY_TYPE:
      case MUSIC_LIBRARY_TYPE:
      default:
        return MediaTypeUnsupportedWindow;
    }
  };

  const icon = (type) => {
    switch (type) {
      case PHOTO_LIBRARY_TYPE:
        return ImageIcon;
      case VIDEO_LIBRARY_TYPE:
        return VideoIcon;
      case MOVIE_LIBRARY_TYPE:
        return FilmIcon;
      case SERIES_LIBRARY_TYPE:
        return TvIcon;
      case MUSIC_LIBRARY_TYPE:
        return MusicIcon;
      case COMICS_LIBRARY_TYPE:
        return ComicsSpeechBubbleIcon;
      default:
        return FolderOpenIcon;
    }
  };

  return {
    PHOTO_LIBRARY_TYPE,
    MOVIE_LIBRARY_TYPE,
    SERIES_LIBRARY_TYPE,
    COMICS_LIBRARY_TYPE,

    icon,
    types,
    component,
    isUnsupportedWindow,
  };
};
