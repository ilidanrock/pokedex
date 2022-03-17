import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorite from "../screens/Favorite";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();
export default function FavoriteNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="FavoriteScreen"
        component={Favorite}
        options={{
          title: "Favorites",
          headerShown: true,
          headerTransparent: false,
          headerTitleAlign: "center",
          //headerShadowVisible: false,
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
