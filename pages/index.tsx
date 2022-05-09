import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { Pokemon, PokemonClient } from 'pokenode-ts';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => {
  return (
    <main>
      <Head>
        <title>Home | Pokedex</title>
      </Head>
    </main>
  );
};

export const getStaticProps: GetStaticProps<{ pokemons: Pokemon[] }> = async () => {
  const pokemonClient = new PokemonClient();
  const { results } = await pokemonClient.listPokemons();

  const pokemons = await Promise.all(
    results.map(async ({ name }) => pokemonClient.getPokemonByName(name))
  );

  return {
    props: { pokemons },
  };
};

export default Home;
