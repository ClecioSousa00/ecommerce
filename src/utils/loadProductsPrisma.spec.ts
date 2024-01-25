import { loadProductsPrisma } from './loadProductsPrisma'
import { prismaMock } from '../../__tests__/mocks/singleton'
import { mocks } from '@/mocks/mock'

describe('Utils: loadProductsPrisma', () => {
  it('should return the keyboards  from prisma', async () => {
    prismaMock.product.findMany.mockResolvedValue(mocks.keyboards)

    const { keyboards } = await loadProductsPrisma()

    expect(prismaMock.product.findMany).toHaveBeenCalledWith({
      where: {
        category: {
          slug: 'keyboards',
        },
      },
    })

    expect(keyboards).toEqual(mocks.keyboards)
  })
})
