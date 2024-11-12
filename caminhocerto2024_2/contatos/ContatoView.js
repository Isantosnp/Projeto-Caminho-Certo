import {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native'
import Constants from 'expo-constants'

import {Card} from './Card'
import {Button} from 'react-native-paper'

import {getAll, deleteById} from './ContatoApi'

/*
const contatos = [
  {id: '1', nome: 'Tarley', tipo: 'IRMÃO', telefone: '31 9 8877-6600'},
  {id: '2', nome: 'Fabio', tipo: 'IRMÃO', telefone: '31 9 8877-6655'},
  {id: '3', nome: 'Geraldo', tipo: 'IRMÃO', telefone: '31 9 8877-6655'},
]
*/
export function ContatoView({navigation}) {
  const [contatos, setContatos] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    atualizar()
  }, [])

  const atualizar = async () => {
      const {contatos, status} = await getAll()
      setContatos(contatos)

      console.log('Sucesso na consulta de contatos')

      if(status === 'offline')
        alert(`Você está trabalhando de forma offline`)
  }

  const excluir = async (id) => {
    await deleteById(id)
    await atualizar()
    alert('Contato excluido com sucesso!')
  }

  return (
    <View style={styles.viewMain}>
      <Text>Contato View</Text>
      <FlatList 
        data={contatos}
        renderItem={(i) => 
          <Card 
            {...i.item} 
            onDelete={() => excluir(i.item.id)} 
            onSelect={() => navigation.navigate('sos') }  
          />
        }
        keyExtractor={(i) => i.id}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={atualizar} />
        }
      />
      
      <Button 
        mode="contained-tonal" 
        onPress={atualizar}
      >
        ATUALIZAR
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  viewMain: {
    paddingTop: Constants.statusBarHeight
  }
})