import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screen/Login";
import ForgotPassword from "./src/screen/ForgotPassword";
import Register from "./src/screen/Register";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
