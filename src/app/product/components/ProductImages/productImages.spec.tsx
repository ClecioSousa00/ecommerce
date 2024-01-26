import { fireEvent, render, screen } from '@testing-library/react'
import { ProductImages } from '.'
import { mocks } from '@/mocks/mock'

describe('Component: ProductImages', () => {
  const product = {
    imageUrls: mocks.keyboards[0].imageUrls,
    productName: mocks.keyboards[0].name,
  }
  it('should show featured image product correctly', () => {
    render(
      <ProductImages
        imageUrls={product.imageUrls}
        productName={product.productName}
      />,
    )

    const featuredImage = screen.getAllByRole('img')

    expect(featuredImage[0].getAttribute('src')).toBe(product.imageUrls[0])
  })

  it('should change the featured image when selecting another product image ', () => {
    render(
      <ProductImages
        imageUrls={product.imageUrls}
        productName={product.productName}
      />,
    )

    const featuredImage = screen.getAllByRole('img')

    const buttonImageProducts = screen.getAllByRole('button')

    fireEvent.click(buttonImageProducts[1])

    expect(featuredImage[0].getAttribute('src')).toBe(product.imageUrls[1])
  })
})
