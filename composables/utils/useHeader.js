import { useUuid } from '~/composables/utils/useUuid.js';
import { useMerge } from '~/composables/utils/useMerge.js';
import kebabCase from 'lodash/kebabCase.js';

/**
 * The `useHeaders` function is a utility for managing header configurations and their state.
 * It provides reactive state management for a collection of headers and their selected state,
 * allowing the addition, removal, modification, and selection of headers.
 *
 * @param {string} [name=useUuid()] - A unique name for the header instance. Defaults to a UUID if not provided.
 * @param {Object} [options={}] - Configuration options for initializing the headers.
 * @param {Array} [options.headers=[]] - Initial list of headers.
 * @param {Array} [options.selectedHeader=[]] - Initial selected header(s).
 *
 * @returns {Object} An object with the following properties and methods:
 *
 * - `headers`: A reactive array containing the list of headers.
 * - `selectedHeader`: A reactive array for tracking selected headers.
 * - `defineHeader`: A method to define or modify a header using a callback function.
 * - `makeHeader`: A method to create a new header object using provided attributes.
 * - `setHeader`: A method to set the headers list, replacing the existing array.
 * - `addHeader`: A method to add a single header to the headers list.
 * - `removeHeader`: A method to remove a header from the headers list by its index.
 * - `selectHeader`: A method to mark a header as selected.
 * - `unselectHeader`: A method to unmark a header as selected.
 */
export const useHeader = (name = useUuid(), options = {}) => {
  const headers = useState(`${name}.headers`, () => options?.headers || []);

  const defineDefaultHeader = (items) => (items.map((item) => ({
    sortable: true,
    sort: item?.sort || '',
    value: kebabCase(item?.title || ''),
    ...item,
  })));

  const defineHeaders = (cb) => (headers.value = defineDefaultHeader(cb()));

  return useMerge({
    name,
    headers,
    defineHeaders,
  });
};
