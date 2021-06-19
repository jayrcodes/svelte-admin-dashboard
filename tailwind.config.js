const production = !process.env.ROLLUP_WATCH;

module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
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
