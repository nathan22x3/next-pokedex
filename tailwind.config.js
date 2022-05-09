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
      white: '#ffffff',
      pokemon: getPokemonColors(),
    },
    extend: {},
  },
  plugins: [],
};
