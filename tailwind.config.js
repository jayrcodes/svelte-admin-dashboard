const production = !process.env.ROLLUP_WATCH;

module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        // ...
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: production
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
