import React, {useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screen/Login";
import Regist from "./src/screen/Regist";
import ChatList from "./src/screen/ChatList";
import ChattingRoom from "./src/screen/ChattingRoom";
import { GoogleSignin } from '@react-native-community/google-signin';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"  options={{ headerShown : false}} component={Login} />
        <Stack.Screen name="Regist" component={Regist} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="ChattingRoom" component={ChattingRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
