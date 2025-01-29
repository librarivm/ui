/**
 * @typedef {Object} PaginationProp
 * @property {string|number} current - The current page.
 * @property {string|number} total - The total number of items.
 * @property {string|number} siblingCount - The number of sibling pages.
 * @property {string|number} perPage - The number of items per page.
 */

/**
 * Creates a set of pagination properties.
 *
 * @param {Object} options - Options to customize the pagination props.
 * @param {number} [options.current=1] - The current page.
 * @param {number} [options.total=0] - The total number of items.
 * @param {number} [options.siblingCount=2] - The number of sibling pages.
 * @param {number} [options.perPage=10] - The number of items per page.
 * @param {number} [options.pageOptions=[5, 10, 15, 25, 50]] - The page option items.
 */
export const usePaginationProps = (options = {}) => {
  options = Object.assign({
    current: 1,
    total: 0,
    siblingCount: 2,
    perPage: 10,
    pageOptions: [5, 10, 15, 25, 50],
  }, options);

  return {
    current: { type: [String, Number], default: options.current },
    perPage: { type: [String, Number], default: options.perPage },
    total: { type: [String, Number], default: options.total },
    siblingCount: { type: [String, Number], default: options.siblingCount },
    pageOptions: { type: Array, default: () => options.pageOptions },
  };
};
