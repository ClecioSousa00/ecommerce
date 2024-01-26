import { render, screen } from '@testing-library/react'
import { mocks } from '@/mocks/mock'
import { CatalogItem } from '.'

describe('Component: CatalogItem', () => {
  it('should must have the  category attribute in the link', () => {
    const HREF = `/category/${mocks.productCategory.slug}`
    render(<CatalogItem category={mocks.productCategory} />)

    const link = screen.getByRole('link')

    expect(link.getAttribute('href')).toBe(HREF)
  })

  it('should show the image of the passed category', () => {
    render(<CatalogItem category={mocks.productCategory} />)

    const image = screen.getByRole('img')

    expect(image.getAttribute('src')).toBe(`${mocks.productCategory.imageUrl}`)
  })
  it('should show the name of category', () => {
    render(<CatalogItem category={mocks.productCategory} />)

    const nameCategory = screen.getByText(mocks.productCategory.name)

    expect(nameCategory).toBeTruthy()
  })
})
