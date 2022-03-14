import AsyncStorage from '@react-native-async-storage/async-storage';
import { include , pull} from "lodash";
import { FAVORITE_STORAGE } from "../utilis/constants";

export async function getPokemonFavoritesApi() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
        return JSON.parse(response || [] )
    } catch (error) {
        throw error
    }
}


export async function addPokemonFavoriteApi(id) {
    try {
        
        const favorites = await getPokemonFavoritesApi()
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
        
    } catch (error) {
        throw error
    }
}

export async function removePokemonFavoriteApi() {
    try {
        await AsyncStorage.removeItem(FAVORITE_STORAGE)
        
    } catch (error) {
        throw error
    }
}

