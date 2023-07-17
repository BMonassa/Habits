import { Container } from "./styles";
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export function BackButton(){

  const { goBack } = useNavigation()

  return(
    <Container onPress={goBack}>
      <Feather
      name="arrow-left"
      size={32}
      color="white"
      />

    </Container>
  )
}
