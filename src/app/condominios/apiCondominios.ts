export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const getCondominios = async () => {
  const response = await fetch('https://raw.githubusercontent.com/vagner107/viva-condo/refs/heads/main/src/app/condominios/api_condominio.json') // https://fatec.short.gy/condominios
  return await response.json() // Converte a resposta em JSON
}