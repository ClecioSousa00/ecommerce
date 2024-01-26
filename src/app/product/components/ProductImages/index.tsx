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
    <div className=" overflow-hidden lg:relative  lg:flex-1   lg:rounded-2xl lg:bg-accent ">
      <div className="relative h-96   flex-1 rounded-b-2xl bg-accent  lg:m-auto lg:h-3/4 lg:w-1/2  ">
        <Image
          className="object-contain"
          src={imageUrl}
          alt={productName}
          fill
          sizes="100%"
          unoptimized
        />
      </div>

      <div className="top-0 mt-8 flex justify-center gap-5 px-5 lg:absolute lg:flex-col">
        {imageUrls.map((image, index) => (
          <button
            key={index}
            className={`relative  h-20  w-20  rounded-sm bg-accent lg:rounded-md lg:bg-black ${
              imageUrl === image ? 'border-2 border-primary' : ''
            }`}
            onClick={() => selectImageProduct(image)}
          >
            <Image
              className="object-contain"
              src={image}
              alt={productName}
              fill
              sizes="100%"
              unoptimized
            />
          </button>
        ))}
      </div>
    </div>
  )
}
