'use client'

import { CartProvider } from '@/context/contextProducts'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <CartProvider>{children}</CartProvider>
}
