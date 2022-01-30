import { StyleSheet, FlatList, Text, View } from "react-native";
import  PokemonCard  from "./PokemonCard";


export default function PokemonList(props) {
  const { pokemons } = props;
  console.log(pokemons);
  return (
    <FlatList
      data={pokemons}
      horizontal={false}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={() => String(Math.random())}
      renderItem={({ item }) => <PokemonCard pokemon = {item}/> }
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,

  },
  pokeNameContainer:{
    display: "flex",
    flex: 1,
    justifyContent: "space-around"
  },
})