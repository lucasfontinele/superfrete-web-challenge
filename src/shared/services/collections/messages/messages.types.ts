export type MessageCollection = {
  content: string
  createdAt: Date
}

export type MessageDTO = {
  id?: string
  content: string
  createdAt: Date
}

export type MessageResponse = Array<MessageCollection>
