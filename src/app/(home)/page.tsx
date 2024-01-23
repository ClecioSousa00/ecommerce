import Image from 'next/image'
import { ButtonCategory } from './components/ButtonCategory'
import { ProductList } from '../../components/ProductList'
import { loadProductsPrisma } from '@/utils/loadProductsPrisma'

export default async function Home() {
  const { categories, keyboards, mouses, productsWitchDiscount } =
    await loadProductsPrisma()

  return (
    <main className="mt-6 lg:mt-0">
      <section>
        <div className="flex justify-center px-4 lg:px-0">
          <picture>
            <source
              srcSet={'/BannerOfertas-desktop.png'}
              media="(min-width: 1024px)"
            />
            <Image
              className="w-full"
              src={'/banner-mobile.png'}
              alt="55% de desconto"
              width={350}
              height={150}
              quality={100}
            />
          </picture>
        </div>
        <div className="mt-7  grid  grid-cols-2  gap-4  px-4 lg:grid-cols-6 lg:gap-0 lg:px-24">
          {categories.map((category) => (
            <ButtonCategory key={category.id} category={category} />
          ))}
        </div>
      </section>

      <div className="px-4 lg:px-24">
        <section className="mt-8 pl-4 ">
          <h2 className="mb-5 font-bold uppercase">ofertas</h2>
          <ProductList products={productsWitchDiscount} />
          <div className=" pr-4 lg:flex lg:justify-between lg:gap-9">
            <Image
              className="mt-8 w-full  lg:w-1/2 "
              src={'/banner-mouses.png'}
              alt="55% de desconto em mouses"
              width={350}
              height={150}
              unoptimized
            />
            <Image
              className="mt-8 hidden w-full lg:block lg:w-1/2  "
              src={'/banner-fones.png'}
              alt="55% de desconto em fones"
              width={350}
              height={150}
              unoptimized
            />
          </div>
        </section>
        <section className="mt-8 px-4">
          <h2 className="mb-5 font-bold uppercase">teclados</h2>

          <ProductList products={keyboards} />

          <Image
            className="mt-8 w-full lg:hidden"
            src={'/banner-fones-mobile.png'}
            alt="55% de desconto em fones"
            width={350}
            height={150}
            unoptimized
          />
          <Image
            className="mt-8 hidden w-full lg:block "
            src={'/banner-fretegrátis.png'}
            alt="55% de desconto em fones"
            width={350}
            height={150}
            unoptimized
          />
        </section>
        <section className="mt-8 px-4 pb-8 ">
          <h2 className="mb-5 font-bold uppercase">mouses</h2>

          <ProductList products={mouses} />
        </section>
      </div>
    </main>
  )
}
