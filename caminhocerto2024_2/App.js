
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeView} from './home/HomeView'
import {ContatoView} from './contatos/ContatoView'
import {SosView} from './sos/SosView'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={defaultOptions} >
        <Stack.Screen name='home' component={HomeView} options={homeOptions} />
        <Stack.Screen name='contato' component={ContatoView} options={contatoOptions} />
        <Stack.Screen name='sos' component={SosView} options={sosOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#24CBAF'
  },
  headerTintColor: 'white'
}

const homeOptions = {
  headerShown: false
}

const contatoOptions = {
  title: 'Contatos',
}

const sosOptions = {
  title: 'SOS'
}

