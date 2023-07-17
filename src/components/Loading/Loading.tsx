import { View } from "react-native";
import LottieView from "lottie-react-native";

export function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#AAC8A7",
      }}
    >
           <LottieView source={require('../../assets/animation_splash.json')}
      autoPlay
      loop
      />
    </View>
  );
}
