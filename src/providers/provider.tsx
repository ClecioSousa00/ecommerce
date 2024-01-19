'use client'

import { CartProvider } from '@/context/contextProducts'
import { ReactNode } from 'react'
import { AuthProvider } from './auth'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  )
}
