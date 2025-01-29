/**
 * @typedef {Object} MediaItem
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {string} poster
 * @property {string} backdrop
 * @property {string} year
 * @property {string} duration
 * @property {boolean} is_featured
 * @property {boolean} is_collection
 * @property {Object} metadata
 * @property {LibraryTypeItem} type
 * @property {AuthorItem[]} authors
 * @property {GenreItem[]} genres
 * @property {MediaItem[]} collections
 */

/**
 * @typedef {Object} AuthorItem
 * @property {number} id
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef {Object} GenreItem
 * @property {number} id
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef { 'photo' | 'video' | 'movie' | 'series' | 'music' | 'book' | 'comics' | 'manga' } LibraryTypeItem
 */
