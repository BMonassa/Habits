import { View } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export function Splash() {

  const navigation = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#AAC8A7",
      }}>

     <LottieView
        source={require('../../assets/animation_splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate('home')}
      />

    </View>
  );
}
