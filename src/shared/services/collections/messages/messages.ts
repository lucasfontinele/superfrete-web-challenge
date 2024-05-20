import { addDoc, getDocs, collection } from 'firebase/firestore'
import { v4 } from 'uuid'
import { db } from '../../Firebase'
import { MessageDTO, MessageResponse } from './messages.types'


export async function getMessages() {
  const querySnapshot = await getDocs(collection(db, 'messages'));
  return querySnapshot.docs.map(doc => doc.data()) as MessageResponse
}

export async function createMessage(data: MessageDTO) {
  try {
    await addDoc(collection(db, 'messages'), {
      ...data,
      id: v4(),
    })
  } catch {
    alert('Erro ao enviar a mensagem.')
  }
}
