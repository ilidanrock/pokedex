import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonsApi } from "../api/pokemon";
import { getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      await LoadPokemons();
    })();
  }, []);

  const LoadPokemons = async () => {
    try {
      const pokemonsArray = [];
      const response = await getPokemonsApi();
      for await (const pokemon of response.results) {
        const pokemonsDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonsDetails.id,
          name: pokemonsDetails.name,
          type: pokemonsDetails.types[0].type.name,
          order: pokemonsDetails.order,
          imagen:
            pokemonsDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}
