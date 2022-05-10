import { Pokemon, PokemonSprites } from 'pokenode-ts';

const formatId = (id: number) => String(id).padStart(3, '0');

const getAnimatedSprite = (sprites: PokemonSprites) =>
  sprites.versions['generation-v']['black-white'].animated.front_default || '';

const toCustomizedPokemon = (pokemon: Pokemon): CustomizedPokemon => {
  const { id, name, sprites, types } = pokemon;

  return {
    id,
    name,
    types,
    sprites: {
      normal: sprites.front_default || '',
      animated: getAnimatedSprite(sprites),
    },
  };
};

const PokemonHelper = {
  formatId,
  getAnimatedSprite,
  toCustomizedPokemon,
};

export default PokemonHelper;
