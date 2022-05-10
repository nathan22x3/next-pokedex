type CustomizedPokemon = Pick<import('pokenode-ts').Pokemon, 'id' | 'name' | 'types'> & {
  /** A set of sprites used to depict this Pokémon in the game. */
  sprites: {
    /** The default depiction of this Pokémon from the front in battle */
    normal: string;
    /** The animated depiction of this Pokémon from the front in battle */
    animated: string;
  };
};
