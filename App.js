import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './API_Screen_01'
import Screen02 from './API_Screen_02'
import Screen03 from './API_Screen_03'
import Master_Portrait from './Master_Portrait'
import Detail_Portrait from './Detail_Portrait'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown:false}}>
    //     <Stack.Screen name="Screen01" component={Screen01} />
    //     <Stack.Screen name="Screen02" component={Screen02} />
    //     <Stack.Screen name="Screen03" component={Screen03} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Master_Portrait" component={Master_Portrait} />
        <Stack.Screen name="Detail_Portrait" component={Detail_Portrait} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
