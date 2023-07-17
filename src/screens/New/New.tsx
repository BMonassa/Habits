import { useState } from "react"
import { BackButton } from "../../components/BackButton/BackButton";
import { CheckBox } from "../../components/CheckBox/Checkbox";
import { Container, ContainerButton, ContentButton, ContentSubText, ContentText, ContentTextInput } from "./styles";
import { Feather } from '@expo/vector-icons'
import { Alert } from "react-native";
import { api } from "../../lib/axios";


const availableWeekDays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-Feira",
    "Sábado"
  ]

export function New(){

  const [weekDays, setweekDays] = useState<number[]>([]);
  const [title, setTitle ] = useState('')


  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setweekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
      console.log(weekDays)
    } else {
      setweekDays(prevState => [...prevState, weekDayIndex])
      console.log(weekDays)
    }
  }

  async function handleCreateNewHabit(){
    try{
      if(!title.trim || weekDays.length === 0){
        return Alert.alert('Amor da minha vida', 'Vc esqueceu de botar o nome do hábito ou de selecionar os dias <3')
      }
      await api.post('/habits', { title, weekDays });
      Alert.alert('Boa mo!', 'Vc adicionou mais um hábito, arrebenta vida!! <3')

      setTitle('');
      setweekDays([]);

    } catch (error) {
      console.log(error)
      Alert.alert('Eita', 'Me mande uma mensagem para eu verificar se houve algum problema no servidor. Te amo!')
    }
  }

  async function handleHabitData(){
    try{

      const response = await api.get('/day');
      console.log(response.data)

    } catch (error) {
      console.log(error)
      Alert.alert('Eita', 'Me mande uma mensagem para eu verificar se houve algum problema no servidor. Te amo!')
    }
  }

  return(
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 500 }}
      >
      <BackButton/>

      <ContentText>
        Criar hábitos
      </ContentText>

      <ContentSubText>
        Qual seu comprometimento?
      </ContentSubText>

      <ContentTextInput
        placeholder="CrossFit, beber água, etc..."
        placeholderTextColor="#9BABB8"
        onChangeText={setTitle}
        value={title}
        />

      <ContentSubText>
        Qual a recorrência?
      </ContentSubText>



{
  availableWeekDays.map((weekDay, index) => (
    title === 'Crossfit ' ? (
      <CheckBox
        theme="fit"
        key={weekDay}
        title={weekDay}
        checked={weekDays.includes(index)}
        onPress={() => handleToggleWeekDay(index)}
      />
    ) : title === 'Beber água ' ? (
      <CheckBox
        theme="drink"
        key={weekDay}
        title={weekDay}
        checked={weekDays.includes(index)}
        onPress={() => handleToggleWeekDay(index)}
      />
    ) :
      <CheckBox
        key={weekDay}
        title={weekDay}
        checked={weekDays.includes(index)}
        onPress={() => handleToggleWeekDay(index)}
      />
  ))
}
      <ContainerButton onPress={() => {handleCreateNewHabit()}}>
        <Feather
          name="check"
          color='#FF9B9B'
          size={20}
        />
        <ContentButton>
          Confirmar
        </ContentButton>
      </ContainerButton>


    </Container>
  )
}
