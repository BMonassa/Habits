import { TouchableOpacityProps } from "react-native";
import { Container, Content, ContentChecked, ContentText } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';


interface Props extends TouchableOpacityProps{
  theme?: "check" | "delete" | "fit" | "drink"
  checked?: boolean;
  title?: string;
  onPress?: () => void;
  delete?: boolean
}

const iconName = {
  check: 'check',
  delete: 'remove-circle',
  fit: 'fitness-center',
  drink: 'local-drink',
};

export function CheckBox({ theme="check", checked = false, title, onPress, ...rest}:Props ){
  return (
    <Container onPress={onPress}  {...rest}>
      {checked ? (
        <ContentChecked theme={theme}>
          <MaterialIcons name={iconName[theme]} color="white" size={20} />
        </ContentChecked>
      ) : (
        <Content />
      )}

      <ContentText>
        {title}
      </ContentText>
    </Container>
  );
}
