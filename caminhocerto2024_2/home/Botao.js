import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Botao({cor='#24CBAF', titulo='DEFINA UM TITULO', onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={
          [styles.viewStyle, {backgroundColor: cor}]
      }>
        <Text style={styles.textStyle}>{titulo.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#24CBAF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    elevation: 13,
    height: 70
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  }
})
