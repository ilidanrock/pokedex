import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  getPokemonFavoritesApi,
} from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;
  const addFavorite = async () => {
    console.log("Anadir favorites", id);
    await addPokemonFavoriteApi(id);
  };

  const getFav = async () => {
    const response = await getPokemonFavoritesApi();
    console.log(response);
  };

  return (
    <>
      <Icon
        name="heart"
        color="#fff"
        size={20}
        onPress={addFavorite}
        style={{ marginRight: 20 }}
      ></Icon>
      <Icon
        name="user"
        color="#fff"
        size={20}
        onPress={getFav}
        style={{ marginRight: 20 }}
      ></Icon>
    </>
  );
}
