import { Container, Content} from "./styles";

interface Props {
  progress?: number;
}

export function ProgressBar({ progress = 0}: Props){
  return(
  <Container>
    <Content
      style={{ width: `${progress}%`}}
    />
  </Container>
  )
}
