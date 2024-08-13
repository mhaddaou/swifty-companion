import { Link } from 'expo-router';
import { StyleSheet, Text, View,Image,ImageBackground, TouchableOpacity } from "react-native";
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


export default function Page() {
  // <ImageBackground source={image} resizeMode="cover" style=
  const [loading, setLoading] = useState(false);
  return (
   <ImageBackground source={require('./../assets/images/background.png')} onLoadStart={() => setLoading(true)} onLoad={() => setLoading(false)}  className='flex-1' >
    <SafeAreaView className='flex-1 flex flex-col justify-between'>
    <View className='w-full h-1/2 '>
    <Text className='text-5xl font-extrabold py-8 w-[80%] mx-auto italic'>
      Welcome To Swifty-Companion
    </Text>


    </View>
    <View className='w-full h-1/2'>
        <TouchableOpacity className='w-[80%] mx-auto  text-center bg-red-400 rounded-md'>
      <LinearGradient colors={["red", "blue", "yellow"]} className='w-full py-3' >
          <Text className='text-center '>click</Text>
      </LinearGradient>
        </TouchableOpacity>
      
    </View>

    </SafeAreaView>
    
    

   </ImageBackground>
  );
}





// exp://bboeuoc-anonymous-8081.exp.direct