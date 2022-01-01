import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import AccountScreen from "../screens/Account";
import FavoriteScreen from "../screens/Favorite";
import PokedexScreen from "../screens/Pokedex";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => {
            return <Icon name={"user"} color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => {
            return <Icon name={"heart"} color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
