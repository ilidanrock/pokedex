import React from "react";
import { View, Text } from "react-native";

export default function Pokemon(props) {
  const {navigation , route } =props
  console.log(props);  
  return (
    <View>
      <Text>Estamos en un POKEMON</Text>
    </View>
  );
}
