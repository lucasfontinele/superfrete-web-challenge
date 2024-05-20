import { addDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '../../Firebase'
import { MessageDTO, MessageResponse } from './messages.types'


export async function getMessages() {
  const querySnapshot = await getDocs(collection(db, 'messages'));
  return querySnapshot.docs.map(doc => doc.data()) as MessageResponse
}

export async function createMessage(data: MessageDTO) {
  try {
    await addDoc(collection(db, 'messages'), data)
  } catch {
    alert('Erro ao enviar a mensagem.')
  }
}
