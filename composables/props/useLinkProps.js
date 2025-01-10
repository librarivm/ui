export const useLinkProps = () => {
  return {
    /** @type import('vue').PropType<import('vue-router').RouteLocationRaw> */
    to: { type: [String, Object], default: undefined },
    href: { type: String, default: undefined },
  };
};
