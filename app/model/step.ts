import { ReactNode } from 'react'

export interface IStep {
  id: number
  title: string
  description: string
  isComplete: boolean
  component?: ReactNode
}
