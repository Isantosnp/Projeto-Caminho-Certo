import {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MapView, {Marker} from 'react-native-maps'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import * as Location from 'expo-location';

import {Button} from 'react-native-paper'

import * as Linking from 'expo-linking';

export function SosView() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync()

    if(status !== 'granted') {
      setLocation({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 1,
        longitudeDelta: 1
      })
    } else {
      const location = await Location.getCurrentPositionAsync()
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      })
    }
  }

  const discar = () => {
    Linking.openURL(`tel:`)
  }

  const sendLocation = () => {
    Linking.openURL(`whatsapp://send?text=Olá!&phone=+5531984547288`)
  }

  return(
    <View style={styles.container}>
      <MapView 
        style={styles.mapView}
        initialRegion={location}
      >
        {
          location &&
          <Marker
            coordinate={location}
            title='Você está aqui!'
            description='Esta é uma descrição do componente Marker'
          >
            <MaterialCommunityIcons name="bus-school" size={50} color="black" />
          </Marker>
        }
      </MapView>
      <View>
        <Button onPress={sendLocation}>
          ENVIAR LOCALIZACAO
        </Button>
        <Button onPress={discar}>
          DISCAR
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapView: {
    flex: 1
  }
})