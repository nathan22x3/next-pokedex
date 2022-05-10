const defaultTheme = require('tailwindcss/defaultTheme');

const pokemonTypes = [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
];

/**
 * Generate pokemon colors by types using CSS variables.
 * @returns {{ [variant: string]: string }}
 */
const getPokemonColors = () => {
  return pokemonTypes
    .map((type) => ({ [type]: `var(--pokemon-${type})` }))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});
};

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      exo: ['"Exo 2"', ...defaultTheme.fontFamily['sans']],
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      black: '#000000',
      neutral: {
        100: '#141416',
        200: '#23262f',
        300: '#353945',
        400: '#777e90',
        500: '#b1b5c3',
        600: '#e6e8ec',
        700: '#f4f5f6',
        800: '#fcfcfd',
      },
      white: '#ffffff',
      pokemon: getPokemonColors(),
    },
    extend: {},
  },
  plugins: [],
};
