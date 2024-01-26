import { render, screen } from '@testing-library/react'
import { mocks } from '@/mocks/mock'
import { ButtonCategory } from '.'

describe('Component: ButtonCategory', () => {
  it('should render category passed correctly', () => {
    render(<ButtonCategory category={mocks.productCategory} />)

    const link = screen.getByRole('link', {
      name: `${mocks.productCategory.name}`,
    })

    expect(link.getAttribute('href')).toBe('/category/mouses')

    expect(link).toBeTruthy()
  })
})
