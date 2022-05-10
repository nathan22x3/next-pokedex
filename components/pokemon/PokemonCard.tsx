import { Pokemon } from 'pokenode-ts';
import { Image } from 'components/common';
import { PokemonHelper, StringHelper } from 'helpers';

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name, sprites, types } = pokemon;

  return (
    <div className="pokemon__card">
      <Image src={PokemonHelper.getAnimatedSprite(sprites)} alt={name} unoptimized={true} />
      <span>&#35;{PokemonHelper.formatId(id)}</span>
      <span>{StringHelper.capitalize(name)}</span>
      <div className="flex gap-x-2">
        {types.map(({ type: { name } }) => (
          <span key={name} className="pokemon__badge" data-color={name}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
