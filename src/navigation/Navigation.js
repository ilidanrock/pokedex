import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import AccountNavigation from "./AccountNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => {
            return <Icon name={"user"} color={color} size={size} />;
          },
          headerTitleAlign: "center",
          title: "Mi Cuenta",
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
          //headerTitleAlign: "center",
          title: "",
          //headerTransparent: true,
          //headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => {
            return <Icon name={"heart"} color={color} size={size} />;
          },
          title: "Favoritos",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  console.log("Se activa pokemon");
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 80, height: 80, top: -15 }}
    />
  );
}
