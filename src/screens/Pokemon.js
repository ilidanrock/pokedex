import React, { useState, useEffect } from "react";
import { ScrollView , StyleSheet} from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorite from "../components/Pokemon/Favorite";
import useAuth from '../hooks/useAuth'

export default function Pokemon(props) {
  const {
    navigation, //navigation solo llega si es un screen si es un compoenete no llega
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  const { auth }= useAuth()

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth) && <Favorite id={pokemon?.id}/>,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 10 }}
          onPress={()=> navigation.goBack()}
        />
      ),
    });
  }, [navigation, params , pokemon]);

  if (!pokemon) {
    return null;
  }
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={
          pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        }
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  types: {
    
  },
})