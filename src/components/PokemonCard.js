import { View, Text , StyleSheet , Image , TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import  getColorByPokemon  from "../utilis/getColorByPokemon";
import { capitalize } from "lodash";
import { getPokemonDetailsByUrlApi } from "../api/pokemon";

export default function pokemonCard(props) {
  const{pokemon} = props
  
  const pokemonColor = getColorByPokemon(pokemon.type)
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles}
    const gotToPokemon = () => {
      // console.log(`Vamos al pokemon Completo en pokemonCard ${pokemon.id}`);
    }
  return (
    <TouchableWithoutFeedback onPress={gotToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles} >
          <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
          <Text style={styles.name}> { capitalize(pokemon.name) }</Text>
          <Image source={{ uri: pokemon.imagen}} style={styles.image}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    
    flex: 1,
    height: 130
  },
  spacing:{
    flex:1,
    padding: 5
  },
  bgStyles:{
    flex: 1,
    borderRadius: 15 ,
    padding: 10
  },
  image:{
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height:90,
  },
  name:{
    color: "#fff",
    fontWeight:"bold",
    fontSize: 15,
    paddingTop: 10,
  },
  number:{
    position: "absolute",
    right: 10,
    top: 10,
    color:"#fff",
    fontSize:11
    
  }
})
