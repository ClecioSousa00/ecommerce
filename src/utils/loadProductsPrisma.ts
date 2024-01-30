// import prisma from '@/lib/prisma'

// export constc = async () => {
//   const categories = await prisma.category.findMany()
//   // console.log(categories)

//   const productsWitchDiscount = await prisma.product.findMany({
//     where: {
//       discountPercentage: { gt: 0 },
//     },
//   })

//   const keyboards = await prisma.product.findMany({
//     where: {
//       category: {
//         slug: 'keyboards',
//       },
//     },
//   })
//   const mouses = await prisma.product.findMany({
//     where: {
//       category: {
//         slug: 'mouses',
//       },
//     },
//   })

//   return {
//     categories,
//     productsWitchDiscount,
//     keyboards,
//     mouses,
//   }
// }

import prisma from '@/lib/prisma'

export const loadProductsPrisma = async () => {
  try {
    const categories = await getCategories()
    const productsWithDiscount = await getProductsWithDiscount()
    const keyboards = await getKeyboards()
    const mouses = await getMouses()

    return {
      categories,
      productsWithDiscount,
      keyboards,
      mouses,
    }
  } catch (error) {
    throw new Error('Ocorreu um erro ao buscar os dados')
  }
}

const getCategories = async () => {
  try {
    return await prisma.category.findMany()
  } catch (error) {
    throw new Error('Ocorreu um erro ao buscar categorias')
  }
}

const getProductsWithDiscount = async () => {
  try {
    return await prisma.product.findMany({
      where: {
        discountPercentage: { gt: 0 },
      },
    })
  } catch (error) {
    throw new Error('Ocorreu um erro ao buscar produtos com desconto')
  }
}

const getKeyboards = async () => {
  try {
    return await prisma.product.findMany({
      where: {
        category: {
          slug: 'keyboards',
        },
      },
    })
  } catch (error) {
    throw new Error('Ocorreu um erro ao buscar teclados')
  }
}

const getMouses = async () => {
  try {
    return await prisma.product.findMany({
      where: {
        category: {
          slug: 'mouses',
        },
      },
    })
  } catch (error) {
    throw new Error('Ocorreu um erro ao buscar mouses')
  }
}
