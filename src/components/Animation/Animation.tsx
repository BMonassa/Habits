import { Container } from "./styles";
import LottieView from "lottie-react-native";

export function Animation(){

  return(
    <Container>
      <LottieView source={require('../../assets/animation_check.json')}
      autoPlay
      loop
      />
    </Container>
  )
}
