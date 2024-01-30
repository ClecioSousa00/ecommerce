import { render, screen } from '@testing-library/react'
import { ProductInfo } from '.'
import { mocks } from '@/mocks/mock'

describe('Component: ProductInfo', () => {
  it('should show badge if product have discount', () => {
    render(<ProductInfo product={mocks.keyboards[0]} />)

    const badgeDiscount = screen.getByTestId('badge')

    expect(badgeDiscount).toBeTruthy()
  })

  it('should click the button', () => {
    render(<ProductInfo product={mocks.keyboards[0]} />)

    const button = screen.getByRole('button', { name: /adicionar /i })

    // checar se a unçao oi chamada
  })
})
