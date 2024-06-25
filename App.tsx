import { StatusBar } from 'expo-status-bar';
import { styled } from 'nativewind';
import { useState } from 'react';
import { ActivityIndicator, Text, View, ImageBackground } from 'react-native';
import HomeScreen from './components/HomeScreen';
import Loading from './components/Loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [isLoad , setIsLoad] = useState(false);
  return (
    <SafeAreaProvider className='w-screen h-screen flex justify-center items-center'>
      <StatusBar style='light'/>
      <ImageBackground onLoad={() => setIsLoad(true)} source={require('./assets/background.png')} resizeMode='cover' className='w-full h-full'>
      <View className='w-full h-full bg--700'>
        {!isLoad && <Loading/>}
        <HomeScreen display={isLoad}/>
      </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}


//  exp://5t1dhpi-anonymous-8081.exp.direct