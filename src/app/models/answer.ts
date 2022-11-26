export interface IAnswer {
  userId: string
  vacancyId: string
  data: {
    questionId: string
    answer: string
  }[]
}