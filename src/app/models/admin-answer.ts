export interface IAdminAnswer {
  id: string
  userId: string
  vacancyId: string
  answers: {
    answer: string
    questionId: string
  }[]
  score: number
  scoreMax: number
  user: {
    id: string
    fio: string
    email: string
    phone: string
  }
  vacancy: {
    id: string
    title: string
    preview: string
    description: string
    city: string
    hrId: string
  }
}