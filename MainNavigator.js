import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./src/Pages/Home";
import Sobre from "./src/Pages/Sobre";
import Contato from "./src/Pages/Contato";
import Produtos from "./src/Pages/Produtos";
import Info from "./src/Pages/Info";
const Stack = createNativeStackNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
