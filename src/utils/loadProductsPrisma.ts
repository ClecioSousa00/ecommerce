import prisma from '@/lib/prisma'

export const loadProductsPrisma = async () => {
  const categories = await prisma.category.findMany()
  // console.log(categories)

  const productsWitchDiscount = await prisma.product.findMany({
    where: {
      discountPercentage: { gt: 0 },
    },
  })

  const keyboards = await prisma.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  })
  const mouses = await prisma.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  })

  return {
    categories,
    productsWitchDiscount,
    keyboards,
    mouses,
  }
}
