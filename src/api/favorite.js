import AsyncStorage from "@react-native-async-storage/async-storage";
import { include, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utilis/constants";

export async function getPokemonFavoritesApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);

    if (response === null) {
      return [];
    }
    console.log(
      "JSON.parse(response) in getPokemonApi function",
      JSON.parse(response)
    );
    return JSON.parse(response);
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonFavoritesApi();

    if (Object.values(favorites).flat(Infinity).includes(id)) {
      return;
    }
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function removePokemonFavoriteApi() {
  try {
    await AsyncStorage.removeItem(FAVORITE_STORAGE);
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const res = await getPokemonFavoritesApi();

    return Object.values(res).flat(Infinity).includes(id);
  } catch (error) {
    throw error;
  }
}

export async function removePokemonFavoriteId(id) {
  try {
    const res = await getPokemonFavoritesApi();

    let arr = Object.values(res)
      .flat(Infinity)
      .filter((el) => el !== id);

    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(arr));
  } catch (error) {
    throw error;
  }
}
