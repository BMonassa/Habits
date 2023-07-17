import { Dimensions } from "react-native";
import { Container, Content } from "./styles";

import { generateProgressPorcentage } from "../../utils/generate-progress-porcentage";
import dayjs from "dayjs";

interface Props {
  theme?: 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth' | 'today';
  onPress?: () => void;
  amountOfHabits?: number;
  amountCompleted?: number;
  date?: Date;
};


const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2 ) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)
//CONFIGURAR O QUADRADINHO DA TELA


export default function HabitDay({ theme = 'first', onPress, amountOfHabits = 0, amountCompleted = 0, date }:Props) {

  const amountAccomplishedPercentage = amountOfHabits > 0 ? generateProgressPorcentage(amountOfHabits, amountCompleted) : 0
  const today = dayjs().startOf('day').toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  return(
    <Container
      onPress={onPress}
    >
     <Content
  theme={
    amountAccomplishedPercentage === 0
      ? 'first'
      : amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 20
      ? 'second'
      : amountAccomplishedPercentage > 20 && amountAccomplishedPercentage < 40
      ? 'third'
      : amountAccomplishedPercentage > 40 && amountAccomplishedPercentage < 60
      ? 'fourth'
      : amountAccomplishedPercentage > 60 && amountAccomplishedPercentage < 80
      ? 'fifth'
      : amountAccomplishedPercentage > 80 && amountAccomplishedPercentage
      ? 'sixth'
      : undefined
  }
  hideBorder={!isCurrentDay ? true : false}
  style={{ width: DAY_SIZE, height: DAY_SIZE }}
/>
    </Container>
  )
}
