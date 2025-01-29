import uniqBy from 'lodash/uniqBy.js';
import isEmpty from 'lodash/isEmpty.js';

export const useHeadersProps = () => {
  return {
    headers: Array,
    headerTitle: { type: String, default: 'title' },
    headerValue: { type: String, default: 'value' },
    headerIcon: { type: String, default: 'icon' },
  };
};

export const getHeaderSortValue = (item) => item.split(',')?.[0] || '';

export const getHeaderSortOrder = (item) => item.split(',')?.[1] || '';

export const sortHeader = (header) => {
  if (header.sortable) {
    if (header.sort === '') {
      header.sort = 'asc';
    } else if (header.sort === 'asc') {
      header.sort = 'desc';
    } else {
      header.sort = '';
    }
  }
};

export const deduplicateHeaders = (headers) => {
  return uniqBy(headers.reverse(), (s) => s.split(',')[0])
    .reverse()
    .filter((i) => !isEmpty(i.split(',')[1]));
};
