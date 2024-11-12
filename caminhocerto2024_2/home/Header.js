import {View, Text, StyleSheet, Image} from 'react-native'

import Logo from '../assets/logo.png'

export function Header() {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.title}>
        <Text style={[styles.textStyle, styles.text1Style]}>Caminho </Text>
        <Text style={[styles.textStyle, styles.text2Style]}>Certo</Text>
      </View>
      <Image source={Logo} style={styles.imgStyle}/>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#CCFFFF',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  title: {
    flexDirection: 'row'
  },  
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold'
  },
  text1Style: {
    color: 'black'
  },
  text2Style: {
    color: '#24CBAF'
  },
  imgStyle: {
    height: 120,
    width: 120,
    borderRadius: 100
  }
})




