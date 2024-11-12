import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

import AntDesign from '@expo/vector-icons/AntDesign'

import Foto from '../assets/filha.png'

export function Card({tipo, nome, telefone, onDelete, onSelect}) {
  return (
    <TouchableOpacity style={styles.viewCard} onPress={onSelect}>
      <Image source={Foto} style={styles.fotoCard} />
      <View style={styles.contatoCard}>
        <Text style={styles.textoCard} >{tipo}</Text>
        <Text style={styles.textoCard}>{nome}</Text>
        <Text style={styles.textoCard}>{telefone}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Clique no edit')}>
        <AntDesign name="edit" size={24} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
 viewCard: {
   flexDirection: 'row',
   alignItems: 'center',
   gap: 10,
   padding: 10
 },
 fotoCard: {
   borderRadius: 100,
   width: 80,
   height: 80
 },
 textoCard: {

 },
 contatoCard: {
   flex: 1
 }
})