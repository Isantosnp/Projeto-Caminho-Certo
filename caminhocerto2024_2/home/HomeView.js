import {View, Text, StyleSheet, Button} from 'react-native'

import {Botao} from './Botao'
import {Header} from './Header'

export function HomeView({navigation, route}) {
  return(
    <View style={styles.viewMain}>
      <Header />

      <View style={styles.buttons}>
        <Botao cor='red' titulo='sos' onPress={() => navigation.navigate('contato')} />
        <Botao titulo='registro' onPress={() => alert('REGISTRO')} />
        <Botao titulo='rastreio' onPress={() => alert('RASTREIO')}/>
        
        {/*
        <Button title='SOS' onPress={() => alert('SOS')} />
        <Button title='REGISTRO' onPress={() => alert('REGISTRO')} />
        <Button title='RASTREIO' onPress={() => alert('RASTREIO')}/>
        */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    paddingTop: 33,
    //backgroundColor: 'lightgreen'
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 18
  },
  buttons: {
    flex: 1,
    justifyContent: 'space-evenly'
  }
})