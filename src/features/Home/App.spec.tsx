import { render, screen } from '@testing-library/react'
import App from './App'
import { APP_TEST_IDS, COMPONENTS } from '../../shared/constants/TestIds.constants'

describe('App', () => {
  it('renders App feature correctly', () => {
    render(<App />)

    expect(screen.getByTestId(APP_TEST_IDS.LOGO)).toBeInTheDocument()
    expect(screen.getByTestId(COMPONENTS.INPUT_CONTAINER)).toBeInTheDocument()
    expect(screen.getByTestId(COMPONENTS.BUTTON_CONTAINER)).toBeInTheDocument()
  })
})