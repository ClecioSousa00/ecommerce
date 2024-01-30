'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4">
      <h2>Ops! Tivemos um erro</h2>
      <Button onClick={() => reset()} variant={'outline'}>
        Tente novamente
      </Button>
    </div>
  )
}
