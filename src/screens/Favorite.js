import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import {
  getPokemonFavoritesApi,
  removePokemonFavoriteApi,
} from "../api/favorite";

export default function Favorite() {
  const fav = async () => {
    console.log(await getPokemonFavoritesApi());
  };

  const removeFav = async () => {
    console.log("removeed");
    removePokemonFavoriteApi();
  };

  return (
    <SafeAreaView>
      <Button onPress={fav} title="THM" />
      <Button onPress={removeFav} title="REmove" />
      <Text>Favorite</Text>
    </SafeAreaView>
  );
}
