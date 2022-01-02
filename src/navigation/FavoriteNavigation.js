import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorite from "../screens/Favorite";

const Stack = createNativeStackNavigator();
export default function FavoriteNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FavoriteScreen" component={Favorite} />
    </Stack.Navigator>
  );
}
