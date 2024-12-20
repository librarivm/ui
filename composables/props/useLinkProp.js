export const useLinkProp = () => {
  return {
    /** @type import('vue').PropType<import('vue-router').RouteLocationRaw> */
    to: { type: [String, Object], default: undefined },
  };
};
