import { Product } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'

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

export const mocks = {
  product,
}
