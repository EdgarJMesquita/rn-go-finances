import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";
import { useTheme } from "styled-components";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { Navigator, Screen, Group } = createBottomTabNavigator();
export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator>
      <Group
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.secondary,
          tabBarInactiveTintColor: theme.colors.text,
          tabBarLabelPosition: "beside-icon",
          tabBarStyle: {
            paddingVertical: Platform.OS === "ios" ? 20 : 0,
          },
        }}
      >
        <Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, size, color }) => (
              <MaterialIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            ),
          }}
          name="Dashboard"
          component={Dashboard}
        />
        <Screen
          name="Register"
          component={Register}
          options={{
            tabBarLabel: "Cadastrar",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="attach-money" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Resume"
          component={Register}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="pie-chart" size={size} color={color} />
            ),
          }}
        />
      </Group>
    </Navigator>
  );
}
