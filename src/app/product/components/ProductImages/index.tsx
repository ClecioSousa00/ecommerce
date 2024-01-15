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
    <div className="  overflow-hidden lg:relative lg:flex-1 lg:rounded-2xl lg:bg-accent ">
      <div className="flex h-96 items-center justify-center rounded-b-2xl bg-accent lg:h-full">
        <Image
          className="lg:w-1/2"
          src={imageUrl}
          alt={productName}
          height={200}
          width={270}
        />
      </div>

      <div className="top-0 mt-8 flex justify-center gap-5 px-5 lg:absolute lg:flex-col">
        {imageUrls.map((image) => (
          <button
            key={productName}
            className={`flex h-20  w-20 items-center justify-center rounded-sm bg-accent lg:rounded-md lg:bg-black ${
              imageUrl === image ? 'border-2 border-primary' : ''
            }`}
            onClick={() => selectImageProduct(image)}
          >
            <Image
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              src={image}
              alt={productName}
              height={0}
              width={0}
              unoptimized
            />
          </button>
        ))}
      </div>
    </div>
  )
}
