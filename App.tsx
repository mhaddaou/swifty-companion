import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { Profiler, useState } from "react";
import { ActivityIndicator, Text, View, ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
} from '@react-navigation/native';
import Profile from "./component/Profile";
import HomeScreen from "./component/HomeScreen";

export type RootStackParams = {
  Home : undefined;
  Profile : { userId: string };
}

export default function App() {
  const stack = createStackNavigator<RootStackParams>();
  
  return (
    <SafeAreaProvider className="flex-1  ">
      <NavigationContainer >
        <StatusBar style="light" />
        <stack.Navigator initialRouteName="Home">
        <stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/>
        <stack.Screen options={{headerShown: false}} name="Profile" component={Profile}/>
        </stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// exp://ui8xpze-anonymous-8081.exp.direct
