/**
 * @param props
 * @property {string | array} type
 * @property {any} default
 * @returns {{xl: {type: (*|(StringConstructor|NumberConstructor)[]), default: *}, lg: {type: (*|(StringConstructor|NumberConstructor)[]), default: *}, md: {type: (*|(StringConstructor|NumberConstructor)[]), default: *}, sm: {type: (*|(StringConstructor|NumberConstructor)[]), default: *}, xs: {type: (*|(StringConstructor|NumberConstructor)[]), default: *}}}
 */
export const useSizeVariantsProp = (props) => {
  const type = props?.type || [String, Number];
  const fallback = props?.default || undefined;

  return {
    xl: { type, default: fallback },
    lg: { type, default: fallback },
    md: { type, default: fallback },
    sm: { type, default: fallback },
    xs: { type, default: fallback },
  };
};
