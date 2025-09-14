module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_layouts/**/*.md',
    './_posts/**/*.{html,markdown,md}',
    './*.html'
  ],
  safelist: [
    'language-plaintext',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        skin: {
          fill: "rgb(var(--color-fill) / <alpha-value>)",
          base: "rgb(var(--color-text-base) / <alpha-value>)",
          accent: "rgb(var(--color-accent) / <alpha-value>)",
          card: "rgb(var(--color-card) / <alpha-value>)",
          "card-muted": "rgb(var(--color-card-muted) / <alpha-value>)",
          line: "rgb(var(--color-border) / <alpha-value>)",
          inverted: "rgb(var(--color-fill) / <alpha-value>)",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
      maxWidth: {
        'app': '58rem',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}