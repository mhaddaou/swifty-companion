import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from '@react-navigation/core';
import { RootStackParams } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";

interface PropsType {
  setInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Search = ({ setInput }: PropsType) => {
  const navigate = useNavigation<StackNavigationProp<RootStackParams>>();
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

  const handlSubmit = () => {
    if (search != "") {
      setInput(search);
      if (inputRef.current) {
        inputRef.current.blur();
        inputRef.current.clear();
      }
      setLoading(true);
      navigate.navigate('Profile', {userId: search})

    }
  };

  return (
    <View className="flex-1 flex justify-center items-center">
      <View className="w-[80%] bg-slate-600/20 rounded-md py-8 px-4 mt-[50%] space-y-8">
        <View className="w-full ">
          <Text className="text-lg text-center font-semibold capitalize leading-relaxed tracking-wider">
            Login
          </Text>
        </View>
        <View>
          <TextInput
            ref={inputRef}
            placeholder="enter login for search"
            onChangeText={(_search) => setSearch(_search)}
            onSubmitEditing={handlSubmit}
            cursorColor="red"
            className="bg-gray-100 h-[50px] rounded-md px-2 lowercase"
          />
        </View>
        <View className="pb-4">
          <Pressable
            className={`bg-[#708fa7] ${
              !loading ? "py-[16px]" : "py-[18px]"
            } rounded-md`}
          >
            <Text
                className="text-center font-semibold text-white text-base"
                onPress={handlSubmit}
              >
                Search
              </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Search;

