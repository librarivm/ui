import merge from 'lodash/merge.js';
import { autoUpdate, flip, shift, useFloating as useFloatingLib } from '@floating-ui/vue';

export const useFloating = (reference, floating, options = {}) => {
  return useFloatingLib(
    reference,
    floating,
    merge(
      {
        placement: 'bottom-end',
        middleware: [flip(), shift({ crossAxis: true, mainAxis: true })],
        whileElementsMounted: autoUpdate,
      },
      options
    )
  );
};
