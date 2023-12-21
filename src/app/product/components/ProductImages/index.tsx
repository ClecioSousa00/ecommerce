'use client'

import Image from 'next/image'
import { useState } from 'react'

type ProductImageProps = {
  imageUrls: string[]
  productName: string
}

export const ProductImages = ({
  imageUrls,
  productName,
}: ProductImageProps) => {
  const [imageUrl, setImageUrl] = useState(imageUrls[0])

  const selectImageProduct = (image: string) => {
    setImageUrl(image)
  }

  return (
    <>
      <div className="flex h-96 items-center justify-center rounded-b-2xl bg-accent">
        <Image src={imageUrl} alt={productName} height={200} width={270} />
      </div>

      <div className="mt-8 flex justify-center gap-5 px-5">
        {imageUrls.map((image) => (
          <button
            key={productName}
            className={`flex h-20  w-20 items-center justify-center rounded-sm bg-accent ${
              imageUrl === image ? 'border-2 border-primary' : ''
            }`}
            onClick={() => selectImageProduct(image)}
          >
            <Image src={image} alt={productName} height={44} width={54} />
          </button>
        ))}
      </div>
    </>
  )
}
