import { Decimal } from '@prisma/client/runtime/library'
import { Category, Prisma, Product } from '@prisma/client'
import { CartProduct } from '@/context/contextProducts'

const product: Product = {
  id: '1',
  name: 'Logitech MX Master 3s',
  slug: 'logitech-mx-master-3s',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
  imageUrls: [
    'https://fsw-store.s3.sa-east-1.amazonaws.com/01_mx-master-3s.png',
    'https://fsw-store.s3.sa-east-1.amazonaws.com/02_mx-master-3s.png',
    'https://fsw-store.s3.sa-east-1.amazonaws.com/03_mx-master-3s.png',
    'https://fsw-store.s3.sa-east-1.amazonaws.com/04_mx-master-3s.png',
  ],
  basePrice: new Decimal('650.00'),
  categoryId: '1',
  discountPercentage: 10, // 10% discount
}

const keyboards: Product[] = [
  {
    id: '1',
    name: 'Logitech MX Keys Mini',
    slug: 'logitech-mx-keys-mini',
    description: 'Lorem ipsum dolor sit.',
    imageUrls: ['url1', 'url2', 'url3', 'url4'],
    basePrice: 500 as unknown as Prisma.Decimal,
    categoryId: 'keyboards',
    discountPercentage: 10,
  },
]

const mouses: Product[] = [
  {
    id: '1',
    name: 'Logitech MX Master 3s',
    slug: 'logitech-mx-master-3s',
    description: 'Lorem ipsum dolor sit.',
    imageUrls: ['url1', 'url2', 'url3', 'url4'],
    basePrice: 500 as unknown as Prisma.Decimal,
    categoryId: 'mouses',
    discountPercentage: 10,
  },
]
const productCart: CartProduct = {
  id: '1',
  name: 'Logitech MX Master 3s',
  slug: 'logitech-mx-master-3s',
  description: 'Lorem ipsum dolor sit.',
  imageUrls: ['url1', 'url2', 'url3', 'url4'],
  basePrice: 500 as unknown as Prisma.Decimal,
  categoryId: 'mouses',
  discountPercentage: 10,
  quantity: 0,
}
const productCategory: Category = {
  id: '1',
  imageUrl: 'URL1',
  name: 'mouses',
  slug: 'mouses',
}

export const mocks = {
  product,
  keyboards,
  mouses,
  productCart,
  productCategory,
}
