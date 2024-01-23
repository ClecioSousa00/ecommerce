import prisma from '@/lib/prisma'
export const useGetProduct = async (slug: string) => {
  const product = await prisma.product.findFirst({
    where: {
      slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  })
  return {
    product,
  }
}
