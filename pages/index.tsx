import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { PokemonClient } from 'pokenode-ts';
import { PokemonCard } from 'components/pokemon';
import { PokemonHelper } from 'helpers';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ pokemons }) => {
  return (
    <main>
      <Head>
        <title>Home | Pokedex</title>
      </Head>
      <div className="pokemon__list">
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps<{ pokemons: CustomizedPokemon[] }> = async () => {
  const pokemonClient = new PokemonClient();
  const { results } = await pokemonClient.listPokemons();

  const _pokemons = await Promise.all(results.map(async ({ name }) => pokemonClient.getPokemonByName(name)));
  const pokemons = _pokemons.map(PokemonHelper.toCustomizedPokemon);

  return {
    props: { pokemons },
  };
};

export default Home;
