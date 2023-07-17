import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import HabitDay, { DAY_SIZE } from "../../components/HabitDay/HabitDay";
import { generateRangeDatesFromYearStart } from "../../utils/generate-range-between-dates";
import dayjs from "dayjs";
import { Container, ContainerWeekDays, ContentWeekDays, ContainerHabit, HabitWrapper, ContentHabit, HabitWrapperContent,} from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { api } from "../../lib/axios";
import { Alert } from "react-native";
import { Loading } from "../../components/Loading/Loading";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]
const datesFromYearStart = generateRangeDatesFromYearStart()
const minimumSummaryDatesSizes = 73 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearStart.length

type SumaryProps = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>

export function Home(){
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState<SumaryProps | null>(null)

  const { navigate } = useNavigation();

  async function fetchData(){
    try {
      setLoading(true);
      const response = await api.get("/summary");
      setSummary(response.data)
      console.log(response.data)
    } catch (error) {
      Alert.alert('Minha vida, ocorreu algum erro no servidor, me manda mensagem pra eu verificar, te amo <3')
      console.log(error)

    } finally {
      setLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchData()
  }, []))

  if (loading) {
    return (
      <Loading />
    )
  }

  return(
    <Container>
        <Header/>
       <ContainerWeekDays>
      {
        weekDays.map((item, index) =>(
          <ContentWeekDays
            key={`${weekDays}-${index}`}
            style={{width: DAY_SIZE}}
            >
              {item}
          </ContentWeekDays>
        ))
      }
      </ContainerWeekDays>

       <ContainerHabit
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100}}>

      {
      summary &&
      <ContentHabit>
        {
            datesFromYearStart.map((date) => {

              const dayWithHabits = summary.find(day => {
                return dayjs(date).isSame(day.date, 'day')
              })

              return (
              <HabitDay
                key={date.toISOString()}
                date={date}
                amountOfHabits={dayWithHabits?.amount}
                amountCompleted={dayWithHabits?.completed}
                onPress={() => {navigate('habit', { date: date.toISOString() });
              }}
            />
            )
          })
          }

          {
            amountOfDaysToFill > 0 && Array
              .from({ length: amountOfDaysToFill })
              .map((_, index) => (
            <HabitWrapperContent key={index}>
                <HabitWrapper
                style={{ width: DAY_SIZE, height: DAY_SIZE}}
                />
            </HabitWrapperContent>
              ))
          }
        </ContentHabit>
      }
      </ContainerHabit>

    </Container>
  )
}
