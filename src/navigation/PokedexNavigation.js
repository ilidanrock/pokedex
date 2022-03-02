import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();
export default function PokedexNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="PokedexScreen"
        component={Pokedex}
        options={{
          title: "Pokedex",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="PokemonScreen"
        component={Pokemon}
        options={{
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
