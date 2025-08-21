export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const getTodos = async (): Promise<ITodo[]> => {
  const response = await fetch('https://fatec.short.gy/condominios')
  return await response.json()
}