import { PokemonSprites } from 'pokenode-ts';

const formatId = (id: number) => String(id).padStart(3, '0');

const getAnimatedSprite = (sprites: PokemonSprites) =>
  sprites.versions['generation-v']['black-white'].animated.front_default || '';

const PokemonHelper = {
  formatId,
  getAnimatedSprite,
};

export default PokemonHelper;
