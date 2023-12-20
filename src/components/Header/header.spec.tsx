import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Component: Header', () => {
  it('should open the menu correctly', () => {
    render(<Header />)

    const button = screen.getByTestId('button-menu')
    fireEvent.click(button)

    const menuContent = screen.getByTestId('menu-content')

    expect(menuContent).toBeTruthy()
  })
})
