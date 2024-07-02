import {
    ActivityIndicator,
    ImageBackground,
    Text,
    TextInput,
    View,
  } from "react-native";

  import { useSafeAreaInsets } from "react-native-safe-area-context";
  import axios, { AxiosResponse } from "axios";
  import { useEffect, useState } from "react";
  import getToken from "../utils/getToken";

  import { createStackNavigator } from "@react-navigation/stack";
  import { NavigationContainer } from "@react-navigation/native";
import Loading from "./Loading";
import Search from "./Search";

  
  function Profile() {
    return (
      <View>
        <Text>profile</Text>
      </View>
    );
  }
  
  function Settings() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
  const HomeScreen = () => {
    const [token, setToken] = useState<string>();
    const [search, setSearch] = useState<string>();
    const [goToSearch, setGoToSearch] = useState<boolean>();
    const [isDisplay, setIsDisplay] = useState<boolean>();
    const [data, setData] = useState<AxiosResponse>();
    const [isLoad, setIsLoad] = useState(false);
  
    const stack = createStackNavigator();
  
    const getInfo = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const res = await axios.get(
          `https://api.intra.42.fr/v2/users/${search?.toLocaleLowerCase()}`,
          config
        );
        if (res.data) {
          setData(res);
          setIsDisplay(true);
        }
        setGoToSearch(false);
        setSearch("");
      } catch (e: any) {
        console.log(e.message);
      }
    };
  
    const insets = useSafeAreaInsets();
  
    useEffect(() => {
      if (!token) {
        getToken().then((_token: string) => {
          setToken(_token);
        });
      }
  
      if (goToSearch) {
        getInfo();
      }
    }, [goToSearch]);
  
    return (
      <ImageBackground
        onLoad={() => setIsLoad(true)}
        source={require("./../assets/background.png")}
        resizeMode="cover"
        className="  w-full h-full"
      >
        <View className="w-full h-full bg--700">
          {isLoad ? (
            <View
              className={` flex-1 w-screen h-full  relative`}
              style={{ paddingTop: insets.top }}
            >
              <Search setInput={setSearch} />
            </View>
          ) : (
            <Loading />
          )}
        </View>
      </ImageBackground>
      
    );
  };
  
  export default HomeScreen;
  