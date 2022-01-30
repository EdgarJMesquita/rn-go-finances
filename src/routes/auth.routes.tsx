import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../screens/Dashboard";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Register" component={Register} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
