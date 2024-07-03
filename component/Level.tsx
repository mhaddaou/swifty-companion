import { useEffect, useState } from "react";
import { AppRegistry, Button, Pressable, Text, View } from "react-native";
import { LinearProgress } from "react-native-elements";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { Dimensions } from "react-native";

const Level = ({ lvl }: { lvl: number }) => {
  const windowWidth = Dimensions.get("window").width - 50;
  const [level, setLevel] = useState(false);
  const translateX = useSharedValue(0);
  const spl = lvl.toString().split(".");

  const getPrc = () : number =>{
    const per = `${spl[1].length == 1 ? `${spl[1]}0` : `${spl[1]}`}`
    return (+per / 100) * windowWidth;
}

  const getSplitText = () => {
    return `level ${spl[0]} - ${
      spl[1].length == 1 ? `${spl[1]}0` : `${spl[1]}`
    }%`;
  };

  useEffect(() => {
    setTimeout(() => {
      translateX.value = withTiming(getPrc(), {
        duration: 1010,
      });
      console.log(Dimensions.get("window").width - 20);
    }, 18);
  }, [lvl]);

  return (
    <View className="pt-5">
      <View
        className="  bg-[#C4D6E3] rounded-xl mx-auto relative"
        style={{ width: windowWidth }}
      >
        <Animated.View
          className="absolute left-0 h-full bg-[#6C8CA6] rounded-xl"
          style={{
            width: translateX,
          }}
        />
        <View className="flex-1 flex justify-center items-center py-[2.5px] relative">
          <Text className="text-white/80 font-semibold text-xs">{getSplitText()}</Text>
        </View>
      </View>
    </View>
  );
};

export default Level;
