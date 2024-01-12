import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: 'Mouses',
        slug: 'mouses',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/mouses.png',
      },
    })

    const mouses = [
      {
        name: 'Logitech MX Master 3s',
        slug: 'logitech-mx-master-3s',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_mx-master-3s.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9teC1tYXN0ZXItM3MucG5nIiwiaWF0IjoxNzA1MDEyMzM1LCJleHAiOjE3MzY1NDgzMzV9.tjygPp5r-hqMJZ96EgRS8TL49zdxvoO10LYGx-xATLY&t=2024-01-11T22%3A32%3A15.229Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_mx-master-3s.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9teC1tYXN0ZXItM3MucG5nIiwiaWF0IjoxNzA1MDEyNDA1LCJleHAiOjE3MzY1NDg0MDV9.o2uk_Q9ojgWAl7mIwWWA78goddzBk6CPSjkELnTKh_U&t=2024-01-11T22%3A33%3A25.649Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_mx-master-3s.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19teC1tYXN0ZXItM3MucG5nIiwiaWF0IjoxNzA1MDE3MDE1LCJleHAiOjE3MzY1NTMwMTV9.v90A5vVZCTeYosRc-G-jnZ943N-WTC4DtvWXyrvsWPQ&t=2024-01-11T23%3A50%3A16.044Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_mx-master-3s.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9teC1tYXN0ZXItM3MucG5nIiwiaWF0IjoxNzA1MDE3MDkxLCJleHAiOjE3MzY1NTMwOTF9.Ah6_qi3kWgO9GoZGrvgnywFldWq06XHDjPvmeuglF9k&t=2024-01-11T23%3A51%3A31.948Z',
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Logitech Pro X Superlight',
        slug: 'logitech-pro-x-superlight',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-superlight.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLXN1cGVybGlnaHQucG5nIiwiaWF0IjoxNzA1MDE3NDUzLCJleHAiOjE3MzY1NTM0NTN9.KP1pJxwshushAoZt3b_QHjWnQ8e7v3dMfxwvw-vf_NE&t=2024-01-11T23%3A57%3A33.628Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-superlight.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLXN1cGVybGlnaHQucG5nIiwiaWF0IjoxNzA1MDE3NDk1LCJleHAiOjE3MzY1NTM0OTV9.CGbFST_PrWdG0kvRXkXnlDRDLNf49zbp0YJeXTI_ikM&t=2024-01-11T23%3A58%3A16.173Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-superlight.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLXN1cGVybGlnaHQucG5nIiwiaWF0IjoxNzA1MDE3NTI1LCJleHAiOjE3MzY1NTM1MjV9.NFhqKbRPtC6YLJpSOZK05SuHscGBfKfLvPabOTgvPjo&t=2024-01-11T23%3A58%3A46.089Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-superlight.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLXN1cGVybGlnaHQucG5nIiwiaWF0IjoxNzA1MDE3NTQyLCJleHAiOjE3MzY1NTM1NDJ9.LDQeP9EjW0vx_8HL6ew0UCDtgdi5g4EEfxiIWISyJDk&t=2024-01-11T23%3A59%3A02.949Z',
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: 'Logitech G305 Lightspeed',
        slug: 'logitech-g305-lightspeed',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-lightspeed.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLWxpZ2h0c3BlZWQucG5nIiwiaWF0IjoxNzA1MDE3ODA2LCJleHAiOjE3MzY1NTM4MDZ9.NiX71L0sLQFrIJG3OMGvfJEmhZccmIfEC_1Cm6c4IWM&t=2024-01-12T00%3A03%3A26.194Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-lightspeed.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLWxpZ2h0c3BlZWQucG5nIiwiaWF0IjoxNzA1MDE3NzgwLCJleHAiOjE3MzY1NTM3ODB9.yLu88ODu1RTSdPPLBRvlKlC9PKVm04mAUT97URa4GyQ&t=2024-01-12T00%3A03%3A00.550Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-lightspeed.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLWxpZ2h0c3BlZWQucG5nIiwiaWF0IjoxNzA1MDE3NzU0LCJleHAiOjE3MzY1NTM3NTR9.GtojPRME3xkVF-HAf1eWwDvfybltWeFiCDTl9Y-qH1M&t=2024-01-12T00%3A02%3A35.007Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-lightspeed.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLWxpZ2h0c3BlZWQucG5nIiwiaWF0IjoxNzA1MDE3NjczLCJleHAiOjE3MzY1NTM2NzN9.h4pgqgigJlqPMC9HhS2XA0B0UhLUS-p99AOcU-TfBJg&t=2024-01-12T00%3A01%3A13.699Z',
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: 'Hyperx Pulsefire Dart',
        slug: 'hyperx-pulsefire-dart',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_hyperx-dart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9oeXBlcngtZGFydC5wbmciLCJpYXQiOjE3MDUwMTc4NDUsImV4cCI6MTczNjU1Mzg0NX0.VHNJkKkTJQ4ruc3-HEropGuamsci0qqMF3gE6NasVCs&t=2024-01-12T00%3A04%3A05.846Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_hyperx-dart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9oeXBlcngtZGFydC5wbmciLCJpYXQiOjE3MDUwMTc4NzIsImV4cCI6MTczNjU1Mzg3Mn0.BfOjFoIS3mQ0ComPf2-kBNA-f9gWNYa4h4q36eDeiQs&t=2024-01-12T00%3A04%3A32.868Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_hyperx-dart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19oeXBlcngtZGFydC5wbmciLCJpYXQiOjE3MDUwMTc4OTYsImV4cCI6MTczNjU1Mzg5Nn0.Xu3qBQ_cthaNAgJC3z4KyoaundlJUr_npDY585lZ5B0&t=2024-01-12T00%3A04%3A56.995Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_hyperx-dart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9oeXBlcngtZGFydC5wbmciLCJpYXQiOjE3MDUwMTc5MzEsImV4cCI6MTczNjU1MzkzMX0.5C81JtZO1Ai3iwKqfddJeoYQMbU2mVCfKD9KEk6mWPw&t=2024-01-12T00%3A05%3A31.454Z',
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Razer Deathadder V2 Pro',
        slug: 'razer-deathadder-v2-pro',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_razer-deathadder.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9yYXplci1kZWF0aGFkZGVyLnBuZyIsImlhdCI6MTcwNTAxODAzOSwiZXhwIjoxNzM2NTU0MDM5fQ.w2dy4ZkP93W7CltgniPQ9jP0GMBicYCHHwV4SOmhIVo&t=2024-01-12T00%3A07%3A19.410Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_razer-deathadder.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9yYXplci1kZWF0aGFkZGVyLnBuZyIsImlhdCI6MTcwNTAxODAxNCwiZXhwIjoxNzM2NTU0MDE0fQ.i3f0XBVdtzPewz92HdqGAnqG_6vSXDSzBvD3EICnWmg&t=2024-01-12T00%3A06%3A54.278Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_razer-deathadder.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19yYXplci1kZWF0aGFkZGVyLnBuZyIsImlhdCI6MTcwNTAxNzk5MSwiZXhwIjoxNzM2NTUzOTkxfQ.HrR9gFsusEEyyojTu20Vd2y9sE3NE-mGEdkE3lRxbX0&t=2024-01-12T00%3A06%3A32.067Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_razer-deathadder.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9yYXplci1kZWF0aGFkZGVyLnBuZyIsImlhdCI6MTcwNTAxNzk2MCwiZXhwIjoxNzM2NTUzOTYwfQ.IgezNA0Zk_c9hTW1nTMnlMLLnmyMlOu6Ndwot8l6uzE&t=2024-01-12T00%3A06%3A00.768Z',
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ]

    await prisma.product.createMany({
      data: mouses,
    })

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: 'Teclados',
        slug: 'keyboards',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/keyboards.png',
      },
    })

    const keyboards = [
      {
        name: 'Logitech MX Keys Mini',
        slug: 'logitech-mx-keys-mini',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-mx-keys-mini.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLW14LWtleXMtbWluaS5wbmciLCJpYXQiOjE3MDUwMTgwODQsImV4cCI6MTczNjU1NDA4NH0.UAqW_D_730EZ26foHxFsnhrKF2UNPuhKnta2DezfukA&t=2024-01-12T00%3A08%3A04.783Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-mx-keys-mini.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLW14LWtleXMtbWluaS5wbmciLCJpYXQiOjE3MDUwMTgxMTcsImV4cCI6MTczNjU1NDExN30.0xDnTxbSCw-7pkUzUAPkDZ7zl1Uhpa2W97Jqk-Ub29w&t=2024-01-12T00%3A08%3A37.846Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-mx-keys-mini.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLW14LWtleXMtbWluaS5wbmciLCJpYXQiOjE3MDUwMTgxNTAsImV4cCI6MTczNjU1NDE1MH0.SnzVBSyMH5uUIYi5UD2FV2cq11rLjb3-VKjf8M-tEpw&t=2024-01-12T00%3A09%3A10.702Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-mx-keys-mini.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLW14LWtleXMtbWluaS5wbmciLCJpYXQiOjE3MDUwMTgxODcsImV4cCI6MTczNjU1NDE4N30.TrpfbzoeOS1cKiuxMQMAqyjjfyDPq38XzK5VVwFcy4o&t=2024-01-12T00%3A09%3A48.125Z',
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Logitech MX Keys S',
        slug: 'logitech-mx-keys-s',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-mx-keys-s.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLW14LWtleXMtcy5wbmciLCJpYXQiOjE3MDUwMTgzMzIsImV4cCI6MTczNjU1NDMzMn0.qBRmCBcQEVuNyzQ6bdVy8g1VSSkRCaWLWiqMX0ulqc4&t=2024-01-12T00%3A12%3A12.639Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-mx-keys-s.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLW14LWtleXMtcy5wbmciLCJpYXQiOjE3MDUwMTgyNzgsImV4cCI6MTczNjU1NDI3OH0.mSKl_CHCxenO0I1Tdlr_kP0PEYOVlo4idhjNWG2EHoY&t=2024-01-12T00%3A11%3A19.113Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-mx-keys-s.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLW14LWtleXMtcy5wbmciLCJpYXQiOjE3MDUwMTgyNTAsImV4cCI6MTczNjU1NDI1MH0.wE6pX9dmD8vr5rNTpmedrSi1QXeZzmL_rJPU3uybstI&t=2024-01-12T00%3A10%3A51.069Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-mx-keys-s.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLW14LWtleXMtcy5wbmciLCJpYXQiOjE3MDUwMTgyMjIsImV4cCI6MTczNjU1NDIyMn0.AK6kFBdqiOzf7C6n65EvusOBtXYH3-EwOV_0esMVItk&t=2024-01-12T00%3A10%3A23.152Z',
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Logitech Pop Keys',
        slug: 'logitech-pop-keys',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-pop-keys.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLXBvcC1rZXlzLnBuZyIsImlhdCI6MTcwNTAxODM1NSwiZXhwIjoxNzM2NTU0MzU1fQ.PXyfpEPtyegTsHjFklAB_OepDwEdvGQxStDuju-bENA&t=2024-01-12T00%3A12%3A35.393Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-pop-keys.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLXBvcC1rZXlzLnBuZyIsImlhdCI6MTcwNTAxODM3OCwiZXhwIjoxNzM2NTU0Mzc4fQ.NeilrmlVfEQPRztWlcJIyvQgp3A7ZsMfIZx6mi2yMf8&t=2024-01-12T00%3A12%3A58.982Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-pop-keys.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLXBvcC1rZXlzLnBuZyIsImlhdCI6MTcwNTAxODQwNiwiZXhwIjoxNzM2NTU0NDA2fQ.MsHV-YU0BFnKKXOz9ox3XpBptJQ79fsUzNjbIiSBNzQ&t=2024-01-12T00%3A13%3A26.356Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-pop-keys.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLXBvcC1rZXlzLnBuZyIsImlhdCI6MTcwNTAxODQzNiwiZXhwIjoxNzM2NTU0NDM2fQ.BCEYohvD2lfkNwg8sf9vTVhsVgphmlBlxib-puZkdDg&t=2024-01-12T00%3A13%3A56.660Z',
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Logitech MX Mechanical',
        slug: 'logitech-mx-mechanical',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-mx-mechanical.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLW14LW1lY2hhbmljYWwucG5nIiwiaWF0IjoxNzA1MDE4NjEyLCJleHAiOjE3MzY1NTQ2MTJ9.jvEunC8N5iPmyS-2Z-J_q8WUeKHVa5jemuAkks8cN6o&t=2024-01-12T00%3A16%3A52.441Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-mx-mechanical.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLW14LW1lY2hhbmljYWwucG5nIiwiaWF0IjoxNzA1MDE4NTcwLCJleHAiOjE3MzY1NTQ1NzB9.f-Ign-ZBI__Wo0vUF1XS0eq3eZGwSM6BXLLOQM9fX-w&t=2024-01-12T00%3A16%3A11.017Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-mx-mechanical.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLW14LW1lY2hhbmljYWwucG5nIiwiaWF0IjoxNzA1MDE4NTM4LCJleHAiOjE3MzY1NTQ1Mzh9.nKgceJCyEdagflD4INv_Jio-BzWsG-1ivp5JOFa9c3c&t=2024-01-12T00%3A15%3A39.062Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-mx-mechanical.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLW14LW1lY2hhbmljYWwucG5nIiwiaWF0IjoxNzA1MDE4NDc4LCJleHAiOjE3MzY1NTQ0Nzh9.psOI1348W7pla8hBrYEvr23dMAFyKXrGS-GVO_D1L8U&t=2024-01-12T00%3A14%3A39.046Z',
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Epomaker TH80',
        slug: 'epomaker-th80',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_epomaker-th80.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9lcG9tYWtlci10aDgwLnBuZyIsImlhdCI6MTcwNTAxODY2MCwiZXhwIjoxNzM2NTU0NjYwfQ.GJEjR_U7KtH6Q_WLoSkbZEeLYL5TlmEVx61IrPkSCxc&t=2024-01-12T00%3A17%3A40.719Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_epomaker-th80.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9lcG9tYWtlci10aDgwLnBuZyIsImlhdCI6MTcwNTAxODY4NiwiZXhwIjoxNzM2NTU0Njg2fQ.0uU2w6ncLF5B0cYxSjfBt0ToTbI6U3vDiVHkPcXYyOU&t=2024-01-12T00%3A18%3A06.376Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_epomaker-th80.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19lcG9tYWtlci10aDgwLnBuZyIsImlhdCI6MTcwNTAxODcxNSwiZXhwIjoxNzM2NTU0NzE1fQ.VxuEN-2E5i5LsXPlAcy7-keEHXA3Agkr1L9DPglSdDs&t=2024-01-12T00%3A18%3A36.114Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_epomaker-th80.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9lcG9tYWtlci10aDgwLnBuZyIsImlhdCI6MTcwNTAxODczOCwiZXhwIjoxNzM2NTU0NzM4fQ.yRiSRB5WkHxgrxcAmlREwmTv2ciYezYQoAcCPkMy2rY&t=2024-01-12T00%3A18%3A58.278Z',
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Redragon Gamer Ashe',
        slug: 'redragon-gamer-ashe',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_redragon-gamer-ashe.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9yZWRyYWdvbi1nYW1lci1hc2hlLnBuZyIsImlhdCI6MTcwNTAxODg1NSwiZXhwIjoxNzM2NTU0ODU1fQ.9JNu3iJZAt2oqSaX6-hty43-z-2qlg3Ugq8yCn2dISU&t=2024-01-12T00%3A20%3A55.985Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_redragon-gamer-ashe.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9yZWRyYWdvbi1nYW1lci1hc2hlLnBuZyIsImlhdCI6MTcwNTAxODgzNSwiZXhwIjoxNzM2NTU0ODM1fQ.zRmfdboZynE-0FP-utCkThkPs6Vy3LhKRp7Gft9LrRQ&t=2024-01-12T00%3A20%3A35.888Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_redragon-gamer-ashe.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19yZWRyYWdvbi1nYW1lci1hc2hlLnBuZyIsImlhdCI6MTcwNTAxODc5MiwiZXhwIjoxNzM2NTU0NzkyfQ.2kYniZepGniDyBUvUTFvJYdaY4w60PrHDs6fhB_-4vs&t=2024-01-12T00%3A19%3A52.942Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_redragon-gamer-ashe.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9yZWRyYWdvbi1nYW1lci1hc2hlLnBuZyIsImlhdCI6MTcwNTAxODgxNCwiZXhwIjoxNzM2NTU0ODE0fQ.j9kNw2f-iIZqu8FyYhq7e1y8av5t-Y46kGDMGfy0n1I&t=2024-01-12T00%3A20%3A14.980Z',
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: keyboards,
    })

    const headphonesCategory = await prisma.category.create({
      data: {
        name: 'Fones',
        slug: 'headphones',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/headphones.png',
      },
    })

    const headphones = [
      {
        name: 'Logitech Zone Vibe 100',
        slug: 'logitech-zone-vibe-100',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-vibe.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLXZpYmUucG5nIiwiaWF0IjoxNzA1MDE5MTc2LCJleHAiOjE3MzY1NTUxNzZ9.Mb99-x8RAOoIhsVVjbxi1PRjj1V3RScZzzodFHyREnQ&t=2024-01-12T00%3A26%3A16.263Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-vibe.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLXZpYmUucG5nIiwiaWF0IjoxNzA1MDE5MjAyLCJleHAiOjE3MzY1NTUyMDJ9.S5MY0XwjNwLdw2ul0WtYwO8lAjFjJEaUhFC-uc9iTGs&t=2024-01-12T00%3A26%3A42.813Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-vibe.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLXZpYmUucG5nIiwiaWF0IjoxNzA1MDE5MjIwLCJleHAiOjE3MzY1NTUyMjB9.Nz9v3jtKuA4jInpCvP4HgfrokuMxxfAfMg4c8UEPj5w&t=2024-01-12T00%3A27%3A00.560Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-vibe.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLXZpYmUucG5nIiwiaWF0IjoxNzA1MDE5MjM5LCJleHAiOjE3MzY1NTUyMzl9.-FyK_hUudiFsNxQbssUhG4482bkhT8vPAgAaA__0QM0&t=2024-01-12T00%3A27%3A19.939Z',
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Logitech Pro X 2 Lightspeed',
        slug: 'logitech-pro-x-2-lightspeed',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-lightspeed-phone.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLWxpZ2h0c3BlZWQtcGhvbmUucG5nIiwiaWF0IjoxNzA1MDE5MzgxLCJleHAiOjE3MzY1NTUzODF9.FyK5JzlkWj6hkeapxewGx1eL73xmIcNm8kDv8T3SxPY&t=2024-01-12T00%3A29%3A41.677Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-lightspeed-phone.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLWxpZ2h0c3BlZWQtcGhvbmUucG5nIiwiaWF0IjoxNzA1MDE5MzU5LCJleHAiOjE3MzY1NTUzNTl9.8vtbBSxh-iCDwxlmt1xuQcf_y9PO5mGoys-rr_hj-VE&t=2024-01-12T00%3A29%3A19.726Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-lightspeed-phone.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLWxpZ2h0c3BlZWQtcGhvbmUucG5nIiwiaWF0IjoxNzA1MDE5MzM2LCJleHAiOjE3MzY1NTUzMzZ9.OADtVkdZX3fjzriU5QaJyM-WRf8KN_6uqkyFHhlyUw4&t=2024-01-12T00%3A28%3A56.278Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-lightspeed-phone.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLWxpZ2h0c3BlZWQtcGhvbmUucG5nIiwiaWF0IjoxNzA1MDE5MzAzLCJleHAiOjE3MzY1NTUzMDN9.ejp_MjkGuOP3EUsmVESxqqodchKvRdTNiOcPek77FkA&t=2024-01-12T00%3A28%3A24.048Z',
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Logitech Astro A30',
        slug: 'logitech-astro-a30',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-astro-a30.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLWFzdHJvLWEzMC5wbmciLCJpYXQiOjE3MDUwMTk0NDUsImV4cCI6MTczNjU1NTQ0NX0.nZUpzdy1G-9uAAylqD_9jKyXYOLjQj0EGBqr0FEFNwo&t=2024-01-12T00%3A30%3A45.807Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-astro-a30.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLWFzdHJvLWEzMC5wbmciLCJpYXQiOjE3MDUwMTk0NjgsImV4cCI6MTczNjU1NTQ2OH0.RQ5KiXeGmEa2hPahCvffSw2jJyDDyv8fCoIm8saE2MY&t=2024-01-12T00%3A31%3A08.220Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-astro-a30.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLWFzdHJvLWEzMC5wbmciLCJpYXQiOjE3MDUwMTk0ODcsImV4cCI6MTczNjU1NTQ4N30.ZhnZMXAlm4xeo2SIGpmTS_jxwwrwpoyjpPWjXaJjcag&t=2024-01-12T00%3A31%3A27.517Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-astro-a30.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLWFzdHJvLWEzMC5wbmciLCJpYXQiOjE3MDUwMTk1MDQsImV4cCI6MTczNjU1NTUwNH0.aYWkkOO-p08WuBazYzTBz1q-EoEM-Vd152W3GeDZ1vE&t=2024-01-12T00%3A31%3A44.659Z',
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Logitech Zone Wired Earbuds',
        slug: 'logitech-zone-wired-earbuds',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-earbuds.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLWVhcmJ1ZHMucG5nIiwiaWF0IjoxNzA1MDE5NjEyLCJleHAiOjE3MzY1NTU2MTJ9.jKdZj5UKYEtLirE5YZJt2DDFcjLGbjEKXWzhjP8qCBY&t=2024-01-12T00%3A33%3A32.389Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-earbuds.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLWVhcmJ1ZHMucG5nIiwiaWF0IjoxNzA1MDE5NTg4LCJleHAiOjE3MzY1NTU1ODh9.fJ9jMB6CYdK8ZQ9CtfD4mxpw6xpL7Q-8qAVJgw580IY&t=2024-01-12T00%3A33%3A08.201Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-earbuds.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLWVhcmJ1ZHMucG5nIiwiaWF0IjoxNzA1MDE5NTY2LCJleHAiOjE3MzY1NTU1NjZ9.-VU3T3qqqjyko0JIohKOzmC3a_V6YO4AtlHQqC4kgNU&t=2024-01-12T00%3A32%3A46.557Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-earbuds.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLWVhcmJ1ZHMucG5nIiwiaWF0IjoxNzA1MDE5NTQxLCJleHAiOjE3MzY1NTU1NDF9.RY28L6EDijhxHSM-oEPi-ohZ2uvN2dqV4TsoaaLUFSc&t=2024-01-12T00%3A32%3A22.105Z',
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Hyperx Cloud Stinger 2',
        slug: 'hyperx-cloud-stinger-2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_hyperx-stinger.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9oeXBlcngtc3Rpbmdlci5wbmciLCJpYXQiOjE3MDUwMTk2MzYsImV4cCI6MTczNjU1NTYzNn0.25jkMpuGDZSjEfxywtXWBFsL-R8OXQYz3-_7Y90VEFU&t=2024-01-12T00%3A33%3A56.677Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_hyperx-stinger.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9oeXBlcngtc3Rpbmdlci5wbmciLCJpYXQiOjE3MDUwMTk2NjAsImV4cCI6MTczNjU1NTY2MH0.89IP64v9llGgqfeEM5JZIsz487kj7foJ-wOkaRPYQow&t=2024-01-12T00%3A34%3A20.804Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_hyperx-stinger.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19oeXBlcngtc3Rpbmdlci5wbmciLCJpYXQiOjE3MDUwMTk2ODksImV4cCI6MTczNjU1NTY4OX0.KGJgxG5phryZ8WcdIqiDUM_O0R_lF9RmVNOD1Jk7sME&t=2024-01-12T00%3A34%3A49.517Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_hyperx-stinger.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9oeXBlcngtc3Rpbmdlci5wbmciLCJpYXQiOjE3MDUwMTk3MDksImV4cCI6MTczNjU1NTcwOX0.lzu46GHGWJc2UrhQ-r51OCqfHWRJIg3FEGl0MXu_8XE&t=2024-01-12T00%3A35%3A09.564Z',
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Razer Kraken X',
        slug: 'razer-kraken-x',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_razer-kraken.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9yYXplci1rcmFrZW4ucG5nIiwiaWF0IjoxNzA1MDIwMDA1LCJleHAiOjE3MzY1NTYwMDV9.UwWRWozfedmAB-aGlifJyEZzVf9LIT181SWiu3IWDmk&t=2024-01-12T00%3A40%3A05.853Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_razer-kraken.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9yYXplci1rcmFrZW4ucG5nIiwiaWF0IjoxNzA1MDE5OTc5LCJleHAiOjE3MzY1NTU5Nzl9.B5RKatm_CQGmVpYkyllP-B3C4nbHOSLxfUG2uNwYY6M&t=2024-01-12T00%3A39%3A39.878Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_razer-kraken.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19yYXplci1rcmFrZW4ucG5nIiwiaWF0IjoxNzA1MDE5OTYxLCJleHAiOjE3MzY1NTU5NjF9.OIeZEXHZQ9rMDnwpl1OEqidFlHQCIKtkRa2ul0eICOY&t=2024-01-12T00%3A39%3A21.540Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_razer-kraken.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9yYXplci1rcmFrZW4ucG5nIiwiaWF0IjoxNzA1MDE5OTI2LCJleHAiOjE3MzY1NTU5MjZ9.M8mNDHdPdZB-ESI4TBkW15upmXk_aKUXOrWezb8hHdY&t=2024-01-12T00%3A38%3A46.760Z',
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: headphones,
    })

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: 'Mousepads',
        slug: 'mousepads',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/mousepads.png',
      },
    })

    const mousepads = [
      {
        name: 'Logitech Powerplay',
        slug: 'logitech-powerplay',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-powerplay.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLXBvd2VycGxheS5wbmciLCJpYXQiOjE3MDUwMjAxMTcsImV4cCI6MTczNjU1NjExN30.gWD3d_lealPhS0zZKum3hGxtaqAYR0bWWHWqg_ZocUQ&t=2024-01-12T00%3A41%3A57.766Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-powerplay.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLXBvd2VycGxheS5wbmciLCJpYXQiOjE3MDUwMjAxNTAsImV4cCI6MTczNjU1NjE1MH0.aaph_ar44LrbkQegPVlhjZlUuafqRxegfV59j2tNPpg&t=2024-01-12T00%3A42%3A30.671Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-powerplay.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLXBvd2VycGxheS5wbmciLCJpYXQiOjE3MDUwMjAxNzQsImV4cCI6MTczNjU1NjE3NH0.bDbCMVGlLr-2PKzIVRWwnXiD85ZIXjFsFSUvmnsSYFI&t=2024-01-12T00%3A42%3A54.301Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-powerplay.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLXBvd2VycGxheS5wbmciLCJpYXQiOjE3MDUwMjAxOTcsImV4cCI6MTczNjU1NjE5N30.CI6VNwTwEZBSxNnNdMW6aInEVSVvMGFDhjVpRthOZW4&t=2024-01-12T00%3A43%3A17.299Z',
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Logitech Desk Mat',
        slug: 'logitech-desk-mat',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-desk-mat.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLWRlc2stbWF0LnBuZyIsImlhdCI6MTcwNTAyMDMwNywiZXhwIjoxNzM2NTU2MzA3fQ.Uv06UivYoS3oZOsRiZ_YiHhsVItCVidZl641QP5l9zM&t=2024-01-12T00%3A45%3A08.155Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-desk-mat.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLWRlc2stbWF0LnBuZyIsImlhdCI6MTcwNTAyMDI4MiwiZXhwIjoxNzM2NTU2MjgyfQ.BCxtC2IB35aLewmSqHM9jired8nySbLDdEGTXNdUBMg&t=2024-01-12T00%3A44%3A43.050Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-desk-mat.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLWRlc2stbWF0LnBuZyIsImlhdCI6MTcwNTAyMDI1OSwiZXhwIjoxNzM2NTU2MjU5fQ.x7qg0JdU9cRFgyLhL01u0j9AUbXNMgQXPHhjqyalWog&t=2024-01-12T00%3A44%3A19.577Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-desk-mat.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLWRlc2stbWF0LnBuZyIsImlhdCI6MTcwNTAyMDIzMCwiZXhwIjoxNzM2NTU2MjMwfQ.7CA_JETHLmGyuStED3vI9l0sNxICXcRzf-65WpdN_1Q&t=2024-01-12T00%3A43%3A50.978Z',
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Logitech G740',
        slug: 'logitech-g740',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-g740.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLWc3NDAucG5nIiwiaWF0IjoxNzA1MDIwMzI4LCJleHAiOjE3MzY1NTYzMjh9.qRg4C1Nu6qZr1jR2ZuJWM0chUkuJcsAMH0DIXrMidfY&t=2024-01-12T00%3A45%3A28.550Z',
          'hhttps://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-g740.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLWc3NDAucG5nIiwiaWF0IjoxNzA1MDIwMzUxLCJleHAiOjE3MzY1NTYzNTF9.CiHewyRTI-xjcKGZO2ExN74KHBdg5kjfFHrIonSpucc&t=2024-01-12T00%3A45%3A51.759Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-g740.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLWc3NDAucG5nIiwiaWF0IjoxNzA1MDIwMzgwLCJleHAiOjE3MzY1NTYzODB9.Jvt5ZcBjsXaHviv0LOMOzicIWpIRM6p90eoCXs1z1ek&t=2024-01-12T00%3A46%3A20.209Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-g740.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLWc3NDAucG5nIiwiaWF0IjoxNzA1MDIwNDAxLCJleHAiOjE3MzY1NTY0MDF9.S-FFpLYWqXFLaMkf7Mjn9a9C8O51OCJtkhwQIWrhjYk&t=2024-01-12T00%3A46%3A41.808Z',
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Logitech Mousepad Studio Series',
        slug: 'logitech-mousepad-studio-series',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_logi-studio-series.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9sb2dpLXN0dWRpby1zZXJpZXMucG5nIiwiaWF0IjoxNzA1MDIwNDg1LCJleHAiOjE3MzY1NTY0ODV9.nR_Rb2ox4JtWmHuyBGqDry7R1IfGk2rRWN64ouJCpMc&t=2024-01-12T00%3A48%3A05.930Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_logi-studio-series.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9sb2dpLXN0dWRpby1zZXJpZXMucG5nIiwiaWF0IjoxNzA1MDIwNDY4LCJleHAiOjE3MzY1NTY0Njh9.XbO4WeALO2R-iPN1j0is6EIH7DNLtypDbInjOTsalKU&t=2024-01-12T00%3A47%3A48.370Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_logi-studio-series.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19sb2dpLXN0dWRpby1zZXJpZXMucG5nIiwiaWF0IjoxNzA1MDIwNDQ5LCJleHAiOjE3MzY1NTY0NDl9.caNDnqrdOuuehOoDCb1laDS96P2yFRpqiNP4tsPGKE8&t=2024-01-12T00%3A47%3A29.554Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_logi-studio-series.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9sb2dpLXN0dWRpby1zZXJpZXMucG5nIiwiaWF0IjoxNzA1MDIwNDIxLCJleHAiOjE3MzY1NTY0MjF9.yuW-28nsRUAX0sYMC1SRBQZfPCkC4zo4qK2tTbf2s2A&t=2024-01-12T00%3A47%3A01.506Z',
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Force One Skyhawk Dark',
        slug: 'force-one-skyhawk-dark',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_force-dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9mb3JjZS1kYXJrLnBuZyIsImlhdCI6MTcwNTAyMDUwNywiZXhwIjoxNzM2NTU2NTA3fQ.SkHo6dDPcSVtjFYhMnvEDdk61GbXrASngD5BasrsFxo&t=2024-01-12T00%3A48%3A27.611Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_force-dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9mb3JjZS1kYXJrLnBuZyIsImlhdCI6MTcwNTAyMDUyMiwiZXhwIjoxNzM2NTU2NTIyfQ.7Q3DdszLcuGjiOOuDD7uW9SZ4llycb3G1mXXmRU1wYE&t=2024-01-12T00%3A48%3A42.668Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_force-dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19mb3JjZS1kYXJrLnBuZyIsImlhdCI6MTcwNTAyMDUzOSwiZXhwIjoxNzM2NTU2NTM5fQ.IfM8MeUw50pzlJRGXDh8Ig8pKrDaTgm853k43pZ27o4&t=2024-01-12T00%3A48%3A59.654Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_force-dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9mb3JjZS1kYXJrLnBuZyIsImlhdCI6MTcwNTAyMDU2MSwiZXhwIjoxNzM2NTU2NTYxfQ.emP8LxuUBoQwF5LyrGZdeQrBhLz7T4Sk7XERxYqZJks&t=2024-01-12T00%3A49%3A21.458Z',
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Force One Skyhawk Snow',
        slug: 'force-one-skyhawk-snow',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/01_force-snow.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMV9mb3JjZS1zbm93LnBuZyIsImlhdCI6MTcwNTAyMDYzNCwiZXhwIjoxNzM2NTU2NjM0fQ.JN9-ye_-fkpgFf1nYkkSPFtNHkAy_rzRWK8OfwjODfA&t=2024-01-12T00%3A50%3A34.473Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/02_force-snow.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wMl9mb3JjZS1zbm93LnBuZyIsImlhdCI6MTcwNTAyMDYxOCwiZXhwIjoxNzM2NTU2NjE4fQ.OqmXdkDJVkP3-kLSKsTaVA13pOE1hvtuDAqw8Z3r7FE&t=2024-01-12T00%3A50%3A19.395Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/03_force-snow.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wM19mb3JjZS1zbm93LnBuZyIsImlhdCI6MTcwNTAyMDU5NiwiZXhwIjoxNzM2NTU2NTk2fQ.DBrn2z8PtztQI5r38SuAxGTILpBWefg0xKHgmjpxNEs&t=2024-01-12T00%3A49%3A57.041Z',
          'https://hoasmkbmqluqonimxyqo.supabase.co/storage/v1/object/sign/product-images/04_force-snow.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy8wNF9mb3JjZS1zbm93LnBuZyIsImlhdCI6MTcwNTAyMDU3OCwiZXhwIjoxNzM2NTU2NTc4fQ.iKG0GkWa9A6VBKu78J85JKRs8K8iKQP5ddgLr3wGCOQ&t=2024-01-12T00%3A49%3A39.009Z',
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: mousepads,
    })

    const monitorsCategory = await prisma.category.create({
      data: {
        name: 'Monitores',
        slug: 'monitors',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/monitors.png',
      },
    })

    const monitors = [
      {
        name: 'Dell S2421HN',
        slug: 'dell-s2421hn',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S2421HN.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S2421HN.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S2421HN.png',
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Dell P2422H',
        slug: 'dell-p2422h',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2422H.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2422H.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2422H.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2422H.png',
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Dell P2723QE',
        slug: 'dell-p2723qe',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2723QE.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2723QE.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2723QE.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2723QE.png',
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Dell S3422DWG',
        slug: 'dell-s3422dwg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3422DWG.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3422DWG.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3422DWG.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3422DWG.png',
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Dell S3222DGM',
        slug: 'dell-s3222dgm',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3222DGM.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3222DGM.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3222DGM.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3222DGM.png',
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Dell AW2524HF',
        slug: 'dell-aw2524hf',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-AW2524HF.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-AW2524HF.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-AW2524HF.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-AW2524HF.png',
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: monitors,
    })

    const speakersCategory = await prisma.category.create({
      data: {
        name: 'Speakers',
        slug: 'speakers',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png',
      },
    })

    const speakers = [
      {
        name: 'Logitech Surround Sound Z607',
        slug: 'logitech-surround-sound-z607',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-surround-z607.png',
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Logitech Dock',
        slug: 'logitech-dock',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-dock.png',
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Sony SA-Z9R Speakers',
        slug: 'sony-sa-z9r-speakers',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-SA-Z9R.png',
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Sony XB43 Extra Bass',
        slug: 'sony-xb43-extra-bass',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-extra-bass.png',
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Sony XB23 Extra Bass',
        slug: 'sony-xb23-extra-bass',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-XB23.png',
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Sony HT-S200F Soundbar',
        slug: 'sony-ht-s200f-soundbar',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-S200F.png',
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: speakers,
    })

    console.log('Seed completed successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
