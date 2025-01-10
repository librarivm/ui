export const useVariantType = () => {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-astronaut-blue-950 focus:ring-primary/50',
    secondary:
      'bg-secondary text-secondary-foreground hover:bg-venice-blue-800 focus:ring-secondary/50',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500/50',
    warning: 'bg-amber-400 text-white hover:bg-amber-500 focus:ring-amber-400/50',
    info: 'bg-sky-400 text-white hover:bg-sky-500 focus:ring-sky-400/50',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500/50',
    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-200 focus:ring-slate-200/50 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-700/50',
    filled: 'bg-neutral-500/10 text-neutral-800 hover:bg-neutral-500/20 focus:ring-neutral-500/30',
    default:
      'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 focus:ring-slate-100/50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-800 dark:hover:border-slate-900 dark:hover:bg-slate-900 dark:focus:ring-slate-800/50',
  };

  return {
    variants,
  };
};
