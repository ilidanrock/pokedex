import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { map, capitalize } from "lodash";

import getColorByPokemon from "../../utilis/getColorByPokemon";
const Type = ({ types }) => {
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemon(item.type.name),
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  content: {
    marginTop: -60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
    //backgroundColor: "#f0f"
  },
});
