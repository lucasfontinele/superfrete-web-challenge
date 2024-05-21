import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Input } from './Input.view'

describe('Input', () => {
  it('renders the label and input correctly', () => {
    const label = 'Test Label'
    const name = 'testName'

    render(<Input label={label} name={name} />)

    expect(screen.getByText(label)).toBeInTheDocument()

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('name', name)
  });
});