import { useNavigation } from "@react-navigation/native";
import { Container, ContainerButton, ContentButton, ContentText } from "./styles";

export default function HabitEmpty(){
  const { navigate } = useNavigation();

  return(
    <Container>
      <ContentText>
        Amor da minha vida, você ainda não tem hábito criado pra esse dia, deixei um botão pra te facilitar! Te amo s2
      </ContentText>

    <ContainerButton onPress={() => navigate('new')}>
      <ContentButton>
        Novo hábito
      </ContentButton>
     </ContainerButton>

    </Container>
  )
}
