import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home/Home'
import { New } from '../screens/New/New'
import { Habit } from '../screens/Habit/Habit'
import { Splash } from '../screens/Splash/Splash'

export function AppRoutes(){

const { Navigator, Screen } = createNativeStackNavigator();

return(
    <Navigator screenOptions={{ headerShown: false}}>

      <Screen
        name="splash"
        component={Splash}
      />

      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="new"
        component={New}
      />

      <Screen
        name="habit"
        component={Habit}
      />
    </Navigator>
  )
}
