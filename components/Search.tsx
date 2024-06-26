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
            className="bg-gray-100 h-[50px] rounded-md px-2"
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


// [
//   {
//      "begin_at":"2022-06-06T08:37:00.000Z",
//      "blackholed_at":null,
//      "created_at":"2022-05-31T11:42:50.877Z",
//      "cursus":{
//         "created_at":"2015-11-04T10:58:13.979Z",
//         "id":9,
//         "kind":"piscine",
//         "name":"C Piscine",
//         "slug":"c-piscine"
//      },
//      "cursus_id":9,
//      "end_at":"2022-07-02T08:37:00.000Z",
//      "grade":null,
//      "has_coalition":true,
//      "id":169511,
//      "level":7.49,
//      "skills":[
//         [
//            "Object"
//         ],
//         [
//            "Object"
//         ],
//         [
//            "Object"
//         ],
//         [
//            "Object"
//         ]
//      ],
//      "updated_at":"2022-05-31T11:42:50.877Z",
//      "user":{
//         "active?":true,
//         "alumni?":false,
//         "alumnized_at":null,
//         "anonymize_date":"2027-06-26T00:00:00.000+01:00",
//         "correction_point":7,
//         "created_at":"2022-05-31T11:42:50.840Z",
//         "data_erasure_date":"2027-06-26T00:00:00.000+01:00",
//         "displayname":"Ahmed Allali",
//         "email":"ahallali@student.1337.ma",
//         "first_name":"Ahmed",
//         "id":113001,
//         "image":[
//            "Object"
//         ],
//         "kind":"student",
//         "last_name":"Allali",
//         "location":"e3r10p2",
//         "login":"ahallali",
//         "phone":"hidden",
//         "pool_month":"june",
//         "pool_year":"2022",
//         "staff?":false,
//         "updated_at":"2024-06-26T12:10:57.473Z",
//         "url":"https://api.intra.42.fr/v2/users/ahallali",
//         "usual_first_name":null,
//         "usual_full_name":"Ahmed Allali",
//         "wallet":140
//      }
//   },
//   {
//      "begin_at":"2022-10-05T07:00:00.000Z",
//      "blackholed_at":"2024-08-05T07:00:00.000Z",
//      "created_at":"2022-09-30T10:50:38.991Z",
//      "cursus":{
//         "created_at":"2019-07-29T08:45:17.896Z",
//         "id":21,
//         "kind":"main",
//         "name":"42cursus",
//         "slug":"42cursus"
//      },
//      "cursus_id":21,
//      "end_at":null,
//      "grade":"Learner",
//      "has_coalition":true,
//      "id":189430,
//      "level":8.43,
//      "skills":[
//         [
//            "Object"
//         ],
//         [
//            "Object"
//         ],
//         [
//            "Object"
//         ],
//         [
//            "Object"
//         ],
//         [
//            "Object"
//         ],
//         [
//            "Object"
//         ],
//         [
//            "Object"
//         ]
//      ],
//      "updated_at":"2022-09-30T10:50:38.991Z",
//      "user":{
//         "active?":true,
//         "alumni?":false,
//         "alumnized_at":null,
//         "anonymize_date":"2027-06-26T00:00:00.000+01:00",
//         "correction_point":7,
//         "created_at":"2022-05-31T11:42:50.840Z",
//         "data_erasure_date":"2027-06-26T00:00:00.000+01:00",
//         "displayname":"Ahmed Allali",
//         "email":"ahallali@student.1337.ma",
//         "first_name":"Ahmed",
//         "id":113001,
//         "image":[
//            "Object"
//         ],
//         "kind":"student",
//         "last_name":"Allali",
//         "location":"e3r10p2",
//         "login":"ahallali",
//         "phone":"hidden",
//         "pool_month":"june",
//         "pool_year":"2022",
//         "staff?":false,
//         "updated_at":"2024-06-26T12:10:57.473Z",
//         "url":"https://api.intra.42.fr/v2/users/ahallali",
//         "usual_first_name":null,
//         "usual_full_name":"Ahmed Allali",
//         "wallet":140
//      }
//   }
// ]