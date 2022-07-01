import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen";
import ForgotPassword from "./src/screen/ForgotPassword";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={HomeScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          {/* <Stack.Screen name="Register" component = {}/> */}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
