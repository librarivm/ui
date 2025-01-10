import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
import isString from 'lodash/isString';

/**
 * @param {SizeVariantObject | string} overrides
 * @returns {string}
 */
export const useContainerPadding = (overrides = {}) => {
  return useMergeClasses(
    ['p-4 md:p-6 lg:p-8'],
    isString(overrides)
      ? [
          overrides,
          overrides.split(' ').map((i) => `xs:${i}`),
          overrides.split(' ').map((i) => `sm:${i}`),
          overrides.split(' ').map((i) => `md:${i}`),
          overrides.split(' ').map((i) => `lg:${i}`),
          overrides.split(' ').map((i) => `xl:${i}`),
        ]
      : [
          overrides.xs && overrides.xs.split(' ').map((i) => `xs:${i}`),
          overrides.sm && overrides.sm.split(' ').map((i) => `sm:${i}`),
          overrides.md && overrides.md.split(' ').map((i) => `md:${i}`),
          overrides.lg && overrides.lg.split(' ').map((i) => `lg:${i}`),
          overrides.xl && overrides.xl.split(' ').map((i) => `xl:${i}`),
        ]
  );
};

export const useContainerXPadding = () => useMergeClasses(['px-4 sm:px-6 lg:px-8']);
