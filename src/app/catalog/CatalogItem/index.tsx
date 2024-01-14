import Image from 'next/image'
import Link from 'next/link'

type CatalogItemProps = {
  imageUrl: string
}

export const CatalogItem = ({ imageUrl }: CatalogItemProps) => {
  return (
    <Link
      className="flex  h-48  w-40 flex-col items-center overflow-hidden rounded-lg lg:h-64 lg:w-full lg:max-w-sm"
      href={'#'}
    >
      <div className="flex w-full flex-1 items-center justify-center bg-primary">
        <Image
          className="w-28 lg:w-40"
          src={imageUrl}
          alt=""
          width={0}
          height={0}
          unoptimized
        />
      </div>
      <p className="w-full bg-secondary py-2 text-center capitalize">
        teclados
      </p>
    </Link>
  )
}
