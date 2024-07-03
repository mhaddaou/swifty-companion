import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../App";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { Pressable } from "react-native";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

import Level from "./Level";
type ProfileScreenRouteProp = RouteProp<RootStackParams, "Profile">;

export default function Profile({ props }: any) {
  const insets = useSafeAreaInsets();
  const [data, setData] = useState<AxiosResponse>();
  const navigate = useNavigation<StackNavigationProp<RootStackParams>>();

  const rout = useRoute<ProfileScreenRouteProp>();
  const { userId } = rout.params;
  console.log(userId);
  useEffect(() => {
    const getInfo = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const res = await axios.get(
          `https://api.intra.42.fr/v2/users/${userId?.toLocaleLowerCase()}`,
          config
        );
        if (res.data) {
          setData(res);
          console.log(data);
        }
        console.log(res.data.cursus_users[1].level);
        //   console.log(res.data.image.link)
        //   console.log(res.data.login)
        //   console.log(res.data.email)
        //   console.log(res.data.wallet)
      } catch (e: any) {
        console.log(e.message);
      }
    };
    getInfo();
  }, []);

  return (
    <ImageBackground
      style={{ paddingTop: insets.top }}
      className="flex-1 px-2"
      source={require("../assets/secondbg.png")}
      resizeMode="cover"
    >
      <View className="w-fit max-w-fit pt-1">
        <Pressable
          className=" max-w-[20%] flex flex-row items-center"
          onPress={() => navigate.navigate("Home")}
        >
          <Image source={require("../assets/icon-back.png")} />
          <Text className="text-base font-semibold text-[#6C8CA6]">Back</Text>
        </Pressable>
        <View className="w- flex flex-row  justify-center">
          <View
            className={`w-[80px] h-[80px]  rounded-full border-[3px] ${
              data?.data.location ? "border-green-300" : "border-slate-300"
            } `}
          >
            <Image
              className="w-full h-full rounded-full"
              source={{
                uri: data?.data.image.link,
              }}
            />
          </View>
        </View>
        <View className="w-full pt-2 space-y-1">
          <Text className="text-center font-bold leading-relaxed tracking-wider italic">
            {data?.data.usual_full_name}
          </Text>
          <Text className="text-center tracking-wide text-xs text-black/60">
            {data?.data.email}
          </Text>
        </View>
        <View className="w-[85%] mx-auto bg-[#6C8CA6] mt-5 flex flex-row rounded-lg py-1.5">
          <View className="border-r border-r-[#C4D6E3] w-1/3 space-y-3 py-2">
            <Text className="text-center text-sm   text-white font-bold tracking-wider italic">
              Login
            </Text>
            <Text className="text-center  text-xs text-[#C4D6E3] tracking-wider">
              {data?.data.login}
            </Text>
          </View>
          <View className="border-r border-r-[#C4D6E3] w-1/3 space-y-3 py-2">
            <Text className="text-center text-sm  text-white font-semibold tracking-wider italic">
              Location
            </Text>
            <Text
              className={`text-center  text-xs text-[#C4D6E3]   tracking-wider  `}
            >
              {data?.data.location || "Unavailable"}
            </Text>
          </View>
          <View className=" w-1/3  text-center space-y-3 py-2">
            <Text className="text-center   text-white font-bold tracking-wider italic">
              Wallet
            </Text>
            <Text className="text-center  text-xs text-[#C4D6E3]  tracking-wider">
              {data?.data.wallet}&nbsp;₳
            </Text>
          </View>
        </View>
      </View>
      <ScrollView >
       <Level lvl={13.94}/>
      </ScrollView>
    </ImageBackground>
  );
}
