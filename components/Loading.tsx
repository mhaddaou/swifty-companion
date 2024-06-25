import { View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View className="flex-1   flex justify-center items-center">
      <ActivityIndicator size={"small"}  />
    </View>
  );
};

export default Loading;
