import { ActivityIndicator, Text, TextInput, View } from "react-native";
import Search from "./Search";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import getToken from "../utils/getToken";
import DisplayData from "./DisplayData";

const HomeScreen = ({ display }: { display: boolean }) => {
  const [token, setToken] = useState<string>();
  const [search, setSearch] = useState<string>();
  const [goToSearch, setGoToSearch] = useState<boolean>();
  const [isDisplay, setIsDisplay] = useState<boolean>();
  const [data, setData] = useState<AxiosResponse>();

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
      setSearch('');
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
    <View
      className={` flex-1  ${display ? "block" : "hidden"} relative`}
      style={{ paddingTop: insets.top }}
    >
      {isDisplay ? (
        <DisplayData res={data} />
      ) : (
        <Search goToSearch={setGoToSearch} setKeywords={setSearch} />
      )}
    </View>
  );
};

export default HomeScreen;
