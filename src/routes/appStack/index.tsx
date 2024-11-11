import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    HomePage,
    DetailPage
} from "../../screens";

const AuthStack = createNativeStackNavigator();
const MainApp = () => {
  return (
    <>
      <AuthStack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
        initialRouteName={"HomePage"}
      >
        <AuthStack.Screen name="HomePage" component={HomePage} />
        <AuthStack.Screen name="DetailPage" component={DetailPage} />
      </AuthStack.Navigator>
    </>
  );
};

export default MainApp;
