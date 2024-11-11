import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "./appStack";

const AppStack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
      <NavigationContainer>
        <AppStack.Navigator
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
          <AppStack.Screen name={"App"} component={App} />
        </AppStack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigation;
