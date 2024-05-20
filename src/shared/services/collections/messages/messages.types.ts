export type MessageCollection = {
  content: string
  createdAt: {
    seconds: number
    nanoseconds: number
  }
}

export type MessageResponse = Array<MessageCollection>
