import { ComponentProps } from 'react'

export interface InputProps extends ComponentProps<'input'> {
  label: string;
  name: string;
  error?: string;
}