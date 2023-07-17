import { Container, Content, ContentText, HeaderText} from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'

export default function Header(){

  const { navigate } = useNavigation();

  return(
  <Container>
    <HeaderText>Hábitos</HeaderText>

    <Content onPress={() => navigate('new')}>
      <Feather
        name="plus"
        color="white"
        size={20}
      />
      <ContentText> Novo </ContentText>
    </Content>

  </Container>
  )
}
