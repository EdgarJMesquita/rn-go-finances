import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../hooks/useAuth";
import { Login } from "../screens/Login";
import { AppRoutes } from "./app.routes";
const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AuthRoutes() {
  const { user } = useAuth();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!!user ? (
        <Screen name="AppRoutes" component={AppRoutes} />
      ) : (
        <Screen name="Login" component={Login} />
      )}
    </Navigator>
  );
}
