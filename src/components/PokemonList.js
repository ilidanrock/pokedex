import { StyleSheet, FlatList, ActivityIndicator, Platform } from "react-native";
import  PokemonCard  from "./PokemonCard";


export default function PokemonList(props) {
  const { pokemons , LoadPokemons , isNext} = props;
  // console.log(pokemons);

  const loadMore = () => {
    LoadPokemons()
  }
  return (
    <FlatList
      data={pokemons}
      horizontal={false}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={() => String(Math.random())}
      renderItem={({ item }) => <PokemonCard pokemon = {item}/> }
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={ isNext && loadMore} // when we reach list final, loadMore function it will be executed
      onEndReachedThreshold={0.1} // with attribute we achive execute loadMore 0.1 seconds before of final list.
      ListFooterComponent={
        isNext && (
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          color="#AEAEAE"
        />)
      }
    />
  );
}
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android"? 30 : 0,
  },
  pokeNameContainer:{
    display: "flex",
    flex: 1,
    justifyContent: "space-around"
  },
  spinner:{
    marginTop: 20,
    marginBottom: Platform.OS === "android"? 90 : 60,
  }
})