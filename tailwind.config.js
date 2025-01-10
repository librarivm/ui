export default {
  darkMode: ['selector'],
  prefix: '',

  safelist: [
    'dark',
    {
      pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /aspect-(auto|square|avatar|video|poster)/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  ],

  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.js',
    'config/**/*.js',
    'plugins/**/*.js',
    'content/**/*.md',
    'app.{js,vue}',
    'error.{js,vue}',
    'nuxt.config.js',
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      aspectRatio: {
        poster: '2 / 3',
        avatar: '1',
      },

      borderColor: {
        DEFAULT: 'rgb(var(--neutral-200) / <alpha-value>)',
      },

      colors: {
        /**
         * --------------------------------------------------------------
         * Brand Colors
         * --------------------------------------------------------------
         */
        'primary': {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
        'secondary': {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
        },

        /**
         * --------------------------------------------------------------
         * Screen Colors
         * --------------------------------------------------------------
         */
        'background': {
          DEFAULT: 'rgb(var(--background) / <alpha-value>)',
          foreground: 'rgb(var(--background-foreground) / <alpha-value>)',
        },
        'window': {
          DEFAULT: 'rgb(var(--window) / <alpha-value>)',
          foreground: 'rgb(var(--window-foreground) / <alpha-value>)',
        },
        'workspace': {
          DEFAULT: 'rgb(var(--workspace) / <alpha-value>)',
          foreground: 'rgb(var(--workspace-foreground) / <alpha-value>)',
        },

        /**
         * --------------------------------------------------------------
         * Custom Colors
         * --------------------------------------------------------------
         */
        'astronaut-blue': {
          50: 'rgb(var(--astronaut-blue-50) / <alpha-value>)',
          100: 'rgb(var(--astronaut-blue-100) / <alpha-value>)',
          200: 'rgb(var(--astronaut-blue-200) / <alpha-value>)',
          300: 'rgb(var(--astronaut-blue-300) / <alpha-value>)',
          400: 'rgb(var(--astronaut-blue-400) / <alpha-value>)',
          500: 'rgb(var(--astronaut-blue-500) / <alpha-value>)',
          600: 'rgb(var(--astronaut-blue-600) / <alpha-value>)',
          700: 'rgb(var(--astronaut-blue-700) / <alpha-value>)',
          800: 'rgb(var(--astronaut-blue-800) / <alpha-value>)',
          900: 'rgb(var(--astronaut-blue-900) / <alpha-value>)',
          950: 'rgb(var(--astronaut-blue-950) / <alpha-value>)',
        },

        'venice-blue': {
          50: 'rgb(var(--venice-blue-50) / <alpha-value>)',
          100: 'rgb(var(--venice-blue-100) / <alpha-value>)',
          200: 'rgb(var(--venice-blue-200) / <alpha-value>)',
          300: 'rgb(var(--venice-blue-300) / <alpha-value>)',
          400: 'rgb(var(--venice-blue-400) / <alpha-value>)',
          500: 'rgb(var(--venice-blue-500) / <alpha-value>)',
          600: 'rgb(var(--venice-blue-600) / <alpha-value>)',
          700: 'rgb(var(--venice-blue-700) / <alpha-value>)',
          800: 'rgb(var(--venice-blue-800) / <alpha-value>)',
          900: 'rgb(var(--venice-blue-900) / <alpha-value>)',
          950: 'rgb(var(--venice-blue-950) / <alpha-value>)',
        },

        'neutral': {
          50: 'rgb(var(--neutral-50) / <alpha-value>)',
          100: 'rgb(var(--neutral-100) / <alpha-value>)',
          200: 'rgb(var(--neutral-200) / <alpha-value>)',
          300: 'rgb(var(--neutral-300) / <alpha-value>)',
          400: 'rgb(var(--neutral-400) / <alpha-value>)',
          500: 'rgb(var(--neutral-500) / <alpha-value>)',
          600: 'rgb(var(--neutral-600) / <alpha-value>)',
          700: 'rgb(var(--neutral-700) / <alpha-value>)',
          800: 'rgb(var(--neutral-800) / <alpha-value>)',
          900: 'rgb(var(--neutral-900) / <alpha-value>)',
          950: 'rgb(var(--neutral-950) / <alpha-value>)',
        },
      },

      fontFamily: {
        serif: ['Noto Serif', 'Source Serif Pro', 'Georgia'],
        sans: ['Noto Sans', 'Roboto', 'sans-serif'],
      },

      fontSize: {
        h1: '2.857rem',
        h2: '2.571rem',
        h3: '2.286rem',
        h4: '2rem',
        h5: '1.714rem',
        h6: '1.143rem',
      },

      height: {
        base: '60px',
      },

      width: {
        activitybar: '56px',
        sidebar: '230px',
        leftpane: '286px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
