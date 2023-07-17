import {BackButton} from '../../components/BackButton/BackButton';
import {useRoute} from '@react-navigation/native';
import dayjs from 'dayjs';
import {
  Container,
  ContainerAnimated,
  ContainerAnimatedteste,
  ContainerCheckBox,
  ContainerDate,
  ContainerDay,
  ContainerHeader,
  ContainerText,
  ContentAnimated,
  ContentHeader,
  ContentText,
} from './styles';
import {ProgressBar} from '../../components/ProgressBar/ProgressBar';
import {CheckBox} from '../../components/CheckBox/Checkbox';
import {Alert} from 'react-native';
import {useEffect, useState} from 'react';
import {Loading} from '../../components/Loading/Loading';
import {api} from '../../lib/axios';
import {generateProgressPorcentage} from '../../utils/generate-progress-porcentage';
import HabitEmpty from '../../components/HabitEmpty/HabitEmpty';
import LottieView from 'lottie-react-native';

interface Params {
  date: string;
}

interface DayInfoProps {
  completedHabits: string[];
  possibleHabits: {
    id: string;
    title: string;
  }[];
}

export function Habit() {
  const [loading, setLoading] = useState(true);
  const [dayInfo, setDayInfo] = useState<DayInfoProps | null>(null);
  const [completedHabits, setCompletedHabits] = useState<string[]>([]);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  const route = useRoute();
  const {date} = route.params as Params;

  const parsedDate = dayjs(date);
  const isDateInPast = parsedDate.endOf('day').isBefore(new Date());
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');

  const habitsProgress = dayInfo?.possibleHabits?.length
    ? generateProgressPorcentage(
        dayInfo.possibleHabits.length,
        completedHabits.length,
      )
    : 0;

  async function fetchHabits() {
    try {
      setLoading(true);

      const response = await api.get('/day', {params: {date}});

      setDayInfo(response.data);
      console.log(response.data.possibleHabits);

      setCompletedHabits(response.data.completedHabits ?? []);
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Vc ainda não tem hábitos criados');
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleHabits(habitId: string) {
    try {
      await api.patch(`/habits/${habitId}/toggle`);

      if (completedHabits?.includes(habitId)) {
        setCompletedHabits(prevState =>
          prevState.filter(habit => habit !== habitId),
        );
      } else {
        setCompletedHabits(prevState => [...prevState, habitId]);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Não foi possível atualizar o status do hábito.');
    }
  }

  async function handleDeleteHabit(habitId: string) {
    try {
      await api.delete(`/habits/${habitId}`);

      // Atualize a lista de hábitos possíveis para excluir o hábito removido
      setDayInfo(prevState => ({
        ...prevState,
        possibleHabits:
          prevState?.possibleHabits.filter(habit => habit.id !== habitId) ?? [],
        completedHabits: prevState?.completedHabits ?? [],
      }));

      // Se o hábito excluído estava marcado como completo, remova-o da lista de hábitos completos
      if (completedHabits.includes(habitId)) {
        setCompletedHabits(prevState =>
          prevState.filter(habit => habit !== habitId),
        );
      }

      Alert.alert('Sucesso', 'Hábito excluído com sucesso.');
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Não foi possível excluir o hábito.');
    }
  }

  useEffect(() => {
    fetchHabits();
  }, []);

  if (loading) {
    return <Loading />;
  }

  function handleAnimation(){
    console.log('passou aqui');
    if (!showAnimation) {
      setShowAnimation(true);
    }
  }

  function handleAnimationFinish() {
    setAnimationFinished(true);
  }

  // const habitCount: { [key: string]: number } = {};

  // dayInfo?.possibleHabits?.forEach(habit => {
  //   if (habitCount[habit.title]) {
  //     habitCount[habit.title]++;
  //   } else {
  //     habitCount[habit.title] = 1;
  //   }
  // });

  // Object.keys(habitCount).forEach(habitTitle => {
  //   const count = habitCount[habitTitle];
  //   if (count > 1) {
  //     console.log(`${habitTitle} se repete ${count} vezes.`);
  //   }
  // });

  const allHabitsCompleted = completedHabits.length === (dayInfo?.possibleHabits?.length ?? 0);
  // const allHabitsCompleted = dayInfo?.possibleHabits?.every(habit => completedHabits.includes(habit.id)) ?? false;

  return (
    <Container>
      <ContainerHeader>
        <LottieView
          source={require('../../assets/animation_fit.json')}
          autoPlay
          loop
          style={{
            width: 190,
            height: 190,
            paddingLeft: 10,
          }}
        />

        <ContentHeader>
          <BackButton />

          <ContainerDate>{dayOfWeek}</ContainerDate>

          <ContainerDay>{dayAndMonth}</ContainerDay>
        </ContentHeader>
      </ContainerHeader>

      <ProgressBar progress={habitsProgress} />


      {allHabitsCompleted && !animationFinished && dayInfo.possibleHabits.length > 0 && (
  <ContainerAnimated>
    <ContentAnimated onPress={() => {handleAnimation()}}>
      <LottieView
        source={require('../../assets/animation_check.json')}
        autoPlay
        loop={false}
        speed={2.0}
        style={{
          width: 300,
          height: 300,
        }}
        onAnimationFinish={handleAnimationFinish}
      />
    </ContentAnimated>
  </ContainerAnimated>
)}


      {dayInfo?.possibleHabits && dayInfo.possibleHabits.length > 0 ? (
        dayInfo.possibleHabits?.map(habit => (
          <ContainerCheckBox key={habit.id}>
            <CheckBox
              title={habit.title}
              checked={completedHabits?.includes(habit.id)}
              onPress={() => handleToggleHabits(habit.id)}
              disabled={isDateInPast}
            />
            <CheckBox
              theme="delete"
              checked={true}
              onPress={() => handleDeleteHabit(habit.id)}
            />
          </ContainerCheckBox>
        ))
      ) : (
        <HabitEmpty />
      )}

    </Container>
  );
}
