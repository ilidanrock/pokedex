import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByPokemon from "../../utilis/getColorByPokemon";

const Header = ({ name, order, image, type }) => {
  const color = getColorByPokemon(type);
  console.log(image);

  const bgStyle = [{ backgroundColor: color, ...styles.bg }];
  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
        </View>
        <View style={styles.containerImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 330,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  containerImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: -40,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain'
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header:{
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
      paddingTop: 40
  },
  name: {
      color:"#fff",
      fontWeight:"bold",
      fontSize: 26
  },
  order:{
      color: "#fff",
      fontWeight: 'bold'
  }
});
