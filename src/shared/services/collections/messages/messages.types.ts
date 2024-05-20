export type MessageCollection = {
  id: string
  content: string
  createdAt: {
    seconds: number
    nanoseconds: number
  }
}

export type MessageDTO = {
  id?: string
  content: string
  createdAt: Date
}

export type MessageResponse = Array<MessageCollection>
