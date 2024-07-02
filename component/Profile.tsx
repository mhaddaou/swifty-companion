import { Image, ImageBackground,  Text, View } from "react-native"
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParams } from "../App";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { Pressable } from "react-native";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from "@react-navigation/stack";
type ProfileScreenRouteProp = RouteProp<RootStackParams, 'Profile'>;

export default function Profile({props} : any){
    const insets = useSafeAreaInsets();
    const [data, setData] = useState<AxiosResponse>()
    const navigate = useNavigation<StackNavigationProp<RootStackParams>>()
    
    
    const rout = useRoute<ProfileScreenRouteProp>()
    const {userId} = rout.params;
    console.log(userId)
    useEffect(() =>{
        const getInfo = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
              const config = {
                headers: { Authorization: `Bearer ${token}` },
              };
              const res = await axios.get(
                `https://api.intra.42.fr/v2/users/${userId?.toLocaleLowerCase()}`,
                config
              );
              if(res.data){
                setData(res);
              }
              console.log(res.data.cursus_users[1].level)
            //   console.log(res.data.image.link)
            //   console.log(res.data.login)
            //   console.log(res.data.email)
            //   console.log(res.data.wallet)
              
            } catch (e: any) {
              console.log(e.message);
            }
          };
          getInfo();

    },[])

    return (
        <ImageBackground style={{paddingTop: insets.top}} className="flex-1 px-2" source={require('../assets/secondbg.png')} resizeMode="cover">
          <View className="w-fit max-w-fit pt-1">
            <Pressable className=" max-w-[20%] flex flex-row items-center" onPress={() => navigate.navigate('Home')} >
              <Image source={require('../assets/icon-back.png')} />
              <Text className="text-base font-semibold text-[#471AA0]">Back</Text>
            </Pressable>
            <View className="w- flex flex-row  justify-center">
              <View className="w-16 h-16 bg--400 rounded-full border-[3px] border-green-300">
              <Image
              className="w-full h-full rounded-full"
        source={{
          uri: data?.data.image.link
        }}
      />
              </View>
            </View>
            
          </View>

        </ImageBackground>
        // <View className="flex-1 relative bg-white" style={{paddingTop: insets.top}}>
        //     <Image className="absolute right-0" source={require('../assets/secondbg.png')}/>
        //     <StatusBar />
        // <Text>this is the profile</Text>
        // <Text>{userId}</Text>
        // <Text>{data?.data.usual_full_name}</Text>
        // <Text>{data?.data.image.link}</Text>
        // <Text>{data?.data.email}</Text>
        // <Text>{data?.data.wallet}</Text>
        // <Text>{data?.data.login}</Text>
        // <Text>{data?.data.location || 'Unavailable'}</Text>
        // <Text>{data?.data.cursus_users[1].level}</Text>
        // </View>
    )
}