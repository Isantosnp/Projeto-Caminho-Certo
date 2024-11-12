import * as ContatoRepository from './ContatoRepository'

export async function getAll() {
  const init = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 112233',
    },
  };

  try {
    const responseHttp = await fetch(
      'https://api-contato-dot-api-samples-423102.uc.r.appspot.com/api/contatos',
      init
    );


    if (responseHttp.ok) {
      const contatos = await responseHttp.json();
      ContatoRepository.insertAll(contatos)

      return { contatos, status: 'online'}
    } else {
      return { contatos: await ContatoRepository.findAll(), status: 'offline'}
    }
  } catch(error) {
    console.log('Erro ao buscar os contatos', error.message)
    return { contatos: await ContatoRepository.findAll(), status: 'offline'}
  }
}

export async function deleteById(id) {
  const init = {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 112233',
    },
  };

  const responseHttp = await fetch(
    'https://api-contato-dot-api-samples-423102.uc.r.appspot.com/api/contatos/' + id,
    init
  );

  if (responseHttp.ok) {
    return await responseHttp.json();
  } else if(responseHttp.status === 404) {
    throw new Error('Contato não existe')
  } else {
    throw new Error('Falha ao tentar excluir o contato');
  }
}


