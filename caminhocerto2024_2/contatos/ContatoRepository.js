import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@contatos'

export async function insert(contato) {
  const listaContatos = await findAll()
  listaContatos.push(contato)
  await insertAll(listaContatos)
}

export async function insertAll(contatos) {
  await AsyncStorage.setItem(KEY, JSON.stringify(contatos))
}

export async function findAll() {
  return await AsyncStorage.getItem(KEY).then(JSON.parse) || []
}

export async function deleteById(id) {
  const listaContatos = await findAll()
  const novaListaContatos = listaContatos.filter(l => l.id !== id)
  await insertAll(novaListaContatos)
}

export async function update(contato) {
  const listaContatos = await findAll()

  const contatoOld = listaContatos.find(c => c.id === contato.id)

  contatoOld.nome = contato.nome
  contatoOld.telefone = contato.telefone
  contatoOld.tipo = contato.tipo

  await insertAll(listaContatos)

  // const novaListaContatos = listaContatos.filter(l => l.id !== contato.id)
 
  //novaListaContatos.push(contato)
  //await insertAll(novaListaContatos)
}

