import React, { useState, useEffect, useCallback } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonFavoritesApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon";
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);

  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const resp = await getPokemonFavoritesApi();

          const response = Object.values(resp).flat(Infinity);
          const pokemonsArray = [];

          for await (const id of response) {
            const pokemonsDetails = await getPokemonDetailsApi(id);
            pokemonsArray.push({
              id: pokemonsDetails.id,
              name: pokemonsDetails.name,
              type: pokemonsDetails.types[0].type.name,
              order: pokemonsDetails.order,
              imagen:
                pokemonsDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  // useEffect(() => {
  //   console.log("Pokemons", pokemons);
  // }, [pokemons]);

  return !auth ? (
    <NoLogged/>
  ) : (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}
