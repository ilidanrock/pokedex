import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteId,
} from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;
  console.log(id, "ID");

  const addFavorite = async () => {
    console.log("Anadir favorites", id);
    await addPokemonFavoriteApi(id);
  };

  const removeFavorite = async () => {
    console.log("Se activa el remove favorite");
    await removePokemonFavoriteId(id)
  }

  
  // const getFav = async () => {
  //   const response = await getPokemonFavoritesApi();
  //   console.log(response);
  // };r

  const [favorite, setFavorite] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const resp = await isPokemonFavoriteApi(id);
        setFavorite(resp);
      } catch (error) {
        throw error;
      }
    })();
  }, [id, favorite]);

  return (
    <>
      {favorite? (
        <Icon
          name="times-circle"
          color="#fff"
          size={25}
          onPress={removeFavorite}
          style={{ marginRight: 20 }}
        ></Icon>
      ): (
        <Icon
        name="heart"
        color="#fff"
        size={25}
        onPress={addFavorite}
        style={{ marginRight: 20 }}
      ></Icon>
      )
    }
    </>
  );
}
