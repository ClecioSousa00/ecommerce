import { render, screen } from '@testing-library/react'
import { ProductItem } from '.'
import { mocks } from '@/mocks/mock'

describe('Component: ProductItem', () => {
  it('should show the product correctly', () => {
    render(<ProductItem product={mocks.product} />)

    const nameProduct = screen.getByText(mocks.product.name)
    expect(nameProduct).toBeTruthy()
  })
})
