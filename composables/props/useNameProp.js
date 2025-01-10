import { useUuid } from '~/composables/utils/useUuid.js';

export const useNameProp = () => {
  return {
    name: { type: String, default: useUuid() },
  };
};
