import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button.view'

describe('Button Component', () => {
  it('renders the children correctly', () => {
    const children = 'Click Me'

    render(<Button>{children}</Button>)

    expect(screen.getByText(children)).toBeInTheDocument()
  })

  it('handles click events correctly', () => {
    const handleClick = vi.fn()
    const children = 'Click Me'

    render(<Button onClick={handleClick}>{children}</Button>)

    const buttonElement = screen.getByText(children)
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})