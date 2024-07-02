import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Skeleton } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './component/HomeScreen';
import Profile from './component/Profile';

export type RootStackParams = {
  Home : undefined;
  Profile : { userId: string };
}

export default function App() {
  const stack = createStackNavigator<RootStackParams>();

  return (
    <SafeAreaProvider className="flex-1 bg-red-400 ">
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